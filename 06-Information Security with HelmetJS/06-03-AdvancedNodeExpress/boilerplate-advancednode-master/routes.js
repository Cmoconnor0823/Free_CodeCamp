// import in all requirements from old server.js page
const passport = require("passport");
const bcrypt = require("bcrypt");

module.exports = function(app, db) {
  
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }
  app.route("/").get((req, res) => {
    //Change the response to render the Pug template
    res.render(process.cwd() + "/views/pug/index", {
      title: "Home Page",
      message: "Please login",
      myNote: "the below var is set to true to show the login form",
      showLogin: true,
      showRegistration: true
    });
  });

  //adding a post route for log in
  app
    .route("/login")
    .post(
      passport.authenticate("local", { failureRedirect: "/" }),
      (req, res) => {
        res.redirect("/profile");
      }
    );

  //Add a route to get the profile page
  app.route("/profile").get(ensureAuthenticated, (req, res) => {
    res.render(process.cwd() + "/views/pug/profile.pug", {
      username: req.user.username
    });
  });

  app.route("/register").post(
    (req, res, next) => {
      var hash = bcrypt.hashSync(req.body.password, 12);
      db.collection("users").findOne({ username: req.body.username }, function(
        err,
        user
      ) {
        if (err) {
          next(err);
        } else if (user) {
          res.redirect("/");
        } else {
          db.collection("users").insertOne(
            { username: req.body.username, password: hash },
            (err, doc) => {
              if (err) {
                res.redirect("/");
              } else {
                next(null, user);
              }
            }
          );
        }
      });
    },
    passport.authenticate("local", { failureRedirect: "/" }),
    (req, res, next) => {
      res.redirect("/profile");
    }
  );

  app.route("/logout").get((req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.use((req, res, next) => {
    res
      .status(404)
      .type("text")
      .send("Not Found");
  });
};
