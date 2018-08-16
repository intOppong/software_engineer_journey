'use strict';

var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');
var helmet      = require('helmet');
var MongoClient = require('mongodb').MongoClient;

var routes      = require('./routes/routes.js');
var runner            = require('./test-runner');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.frameguard({action: 'sameorigin'}));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))


MongoClient.connect(process.env.DB, { useNewUrlParser: true }, function(err, client) {
if (err) console.log('Unable to connect', err);
else {
  console.log('Connection Established');
  
  const db = client.db('freecodecamp');
  
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

module.exports = app; //for testing
