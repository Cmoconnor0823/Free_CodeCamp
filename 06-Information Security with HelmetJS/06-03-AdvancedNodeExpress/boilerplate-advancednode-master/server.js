"use strict";

const express = require("express");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const session = require("express-session");
//const passport = require("passport");
//Create the Connection to the Mongo Db
const mongo = require("mongodb").MongoClient;
// require our user's id from mongo db
// const ObjectID = require("mongodb").ObjectID;
// const LocalStrategy = require("passport-local");
// const bcrypt = require("bcrypt");

//Time to clean up our server file
const routes = require("./routes.js");
const auth = require("./auth.js");

const app = express();

fccTesting(app); //For FCC testing purposes
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add in a set for the template engine
app.set("view engine", "pug");



//now enclose the below functions in a call to our db
mongo.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // the line below fixes an error with db not being a function
    let db = client.db("advancednode");
    if (err) {
      console.log("There is a problem with your database" + err);
    } else {
      console.log("Connection to DB Successful");
      
      auth(app, db);
      routes(app, db);

      // create the functions to hide and decript passwords

      app.listen(process.env.PORT || 3000, () => {
        console.log("Listening on port " + process.env.PORT);
      });
    }
  }
);
