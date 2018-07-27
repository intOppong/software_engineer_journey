// modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');

	// Route Modules
var adminRouter = require("./routes/admin");
var apiRouter = require("./routes/api");
var authRouter = require("./routes/auth");
var logging = require('./logging.js')


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



app.use(authRouter);

app.use((req, res, next) => {
	if (req.isAuthenticated()) {		// same: if (req.user) return next();
		res.locals.user = req.user;
		return next();
	}
	else res.redirect('/login');
})

app.get('/', function (req, res) {
	res.render("home.jade", {title: "Home"});
});

app.use("/admin", adminRouter);
app.use("/api", apiRouter);





app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

app.listen(3000, () => {
	console.log('Node is listening on port 3000')
});
