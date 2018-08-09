// modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');
	// Our Modules
var routes = require("./routes/routes");
var logging = require('./modules/logging.js');


// App Settings
app.set("views", "./views");
app.set("view engine", "jade");

// Middleware
app.use(logging);
	// Static
app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));
	// BodyParser
app.use(bodyParser.urlencoded( {extended:true})); // for parsing forms
app.use(bodyParser.json());	// for parsing json
	// Also Debugging - NOTE: doesn't work when placed above other middleware: DAMN
//require('express-debug')(app, {});
app.use(session({
	secret: 'key example',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());	// creates a session

routes(app);

app.listen(3000, () => {
	console.log('Node is listening on port 3000')
});
