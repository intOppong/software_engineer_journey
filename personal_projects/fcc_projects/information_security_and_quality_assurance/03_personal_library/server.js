'use strict';

var express     = require('express');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var MongoClient = require('mongodb').MongoClient;
var ObjectId    = require('mongodb').ObjectID;
var helmet      = require('helmet')

var routes      = require('./routes/routes.js');
var runner            = require('./test-runner');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({origin: '*'})); //USED FOR FCC TESTING PURPOSES ONLY!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.noCache());
app.use(helmet.hidePoweredBy({setTo:'PHP 4.2.0'}));




module.exports = app; //for unit/functional testing


MongoClient.connect(process.env.DB, function(err, db) {
if (err) console.log('Unable to connect', err);
else {
  console.log('Connection Established');
  
  routes(app, db);
  
  //Start our server and tests!
  app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port " + process.env.PORT);
    if(process.env.NODE_ENV==='test') {
      console.log('Running Tests...');
      setTimeout(function () {
        try {
          runner.run();
        } catch(e) {
          var error = e;
            console.log('Tests are not valid:');
            console.log(error);
        }
      }, 1500);
    }
  });
 
}  // else

});  // MongoClient