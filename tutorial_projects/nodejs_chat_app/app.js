// modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require('morgan');
var fs = require('fs');


// App Settings
app.set("views", "./views");
app.set("view engine", "jade");

// Middleware
	// Logging & Debugging
	var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream})); 	// combined: an example format of logging used with morgan'
	// Static
app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));
	// BodyParser
app.use(bodyParser.urlencoded( {extended:true})); // for parsing forms
app.use(bodyParser.json());	// for parsing json
	// Also Debugging - NOTE: doesn't work when placed above other middleware: DAMN
require('express-debug')(app, {});


// Our modules
var adminModule = require("./admin");
var apiModule = require("./api");

app.get('/', function (req, res) {
	res.render("home.jade", {title: "Home"});
});

app.use("/admin", adminModule);
app.use("/api", apiModule);

/*
app.use(function(error, req, res, next) {
  // your code to handle errors
  console.log("Errors everywhere");
	return next({status: 404, message: 'not found'})
});
*/

app.listen(3000, () => {
	console.log('Node is listening on port 3000')
});
