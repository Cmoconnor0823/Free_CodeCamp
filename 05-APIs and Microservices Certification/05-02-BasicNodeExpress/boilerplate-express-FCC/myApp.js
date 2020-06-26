var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// --> 7)  Mount the Logger middleware here
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use(function(req, res, next){
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
// app.get("/",function(req, res) {
//   res.send('Hello Express');
// })

/** 3) Serve an HTML file */
//  app.get("/", (request, response) => response.sendFile(__dirname + "/views/index.html"));

// /** 4) Serve static assets  */
//  app.use(express.static("public"));

/** 5) serve JSON on a specific route */
//  app.get("/json", function(req, res){
//   res.json({"message": "Hello json"});
//  });

/** 6) Use the .env file to configure the app */
// app.get("/json", function(req, res) {
//   let myObj = {"message": "Hello json"}
//   if (process.env.MESSAGE_STYLE == "uppercase") {
//     let newObj = {}
//     for (let prop in myObj) {
//       newObj[prop] = myObj[prop].toUpperCase();
//     }
//     res.json(newObj);
//   } else {
//     res.json(myObj);  
//   }
// });


/** 8) Chaining middleware. A Time server */
// app.get('/now', function(req,res, next){
//   next();
// }, function(req, res){
//  var time = new Date().toString();
//   console.log('time'+time);
//   res.json({'time': time});
// });
   

/** 9)  Get input from client - Route parameters */
// app.get('/:word/echo', function(req, res) {
// res.json({'echo': req.params.word});
// });

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
// app.route('/name').get((req, res) => {
//    var first = req.query.first;
//    var last = req.query.last;
//    var jsonObj = {name: first + ' ' + last};
//    res.send(jsonObj);
// }).post();

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.use(bodyParser.urlencoded({ extended: false }));

/** 12) Get data form POST  */
app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
