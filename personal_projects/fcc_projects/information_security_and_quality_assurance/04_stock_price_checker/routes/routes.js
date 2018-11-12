// Route Modules
var apiRoutes = require('./api.js');
var fccTestingRoutes  = require('./fcctesting.js');

module.exports = function (app, db) {

/*
  ===============================================
  Index Route
  ===============================================
*/
  
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });


    


/*
===============================================
Section Routes
===============================================
*/

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app, db);  
  
/*
===============================================
Not Found
===============================================
*/

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

  
}