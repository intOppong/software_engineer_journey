// modules

  // Route Modules
var adminRouter = require("./admin");
var apiRouter = require("./api");
var authRouter = require("./auth");

module.exports = function (app) {

/*
  ===============================================
  Auth Routes
  ===============================================
*/
app.use(authRouter);

app.use((req, res, next) => {
	if (req.isAuthenticated()) {		// same: if (req.user) return next();
		res.locals.user = req.user;
		return next();
	}
	else res.redirect('/login');
})


/*
  ===============================================
  Index Route
  ===============================================
*/

app.get('/', function (req, res) {
	res.render("home.jade", {title: "Home"});
});

/*
  ===============================================
  Section Routes
  ===============================================
*/
app.use("/admin", adminRouter);

app.use("/api", apiRouter);


/*
  ===============================================
  Not Found
  ===============================================
*/
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});


}
