
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcrypt");

const ObjectID = require("mongodb").ObjectID;
const LocalStrategy = require("passport-local");

module.exports = function(app, db) {
  //Now we set up or express app to use the session secret from the .env file
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true
    })
  );

  // Now we pull in Passport that will use the session we just created

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    db.collection("users").findOne({ _id: new ObjectID(id) }, (err, doc) => {
      done(null, doc);
    });
  });

  passport.use(
    new LocalStrategy(function(username, password, done) {
      db.collection("users").findOne({ username: username }, function(
        err,
        user
      ) {
        console.log("User " + username + " attempted to log in.");
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        //if (password !== user.password) { return done(null, false); }
        return done(null, user);
      });
    })
  );
};
