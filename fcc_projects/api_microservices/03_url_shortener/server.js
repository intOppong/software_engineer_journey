'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dns = require('dns');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded( {extended:false}));

// db Schema
var shortUrlSchema = mongoose.Schema({
  original_url: {type: String, required: true},
  short_url: {type: Number, required: true}
});

// db Model
var ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)


app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});


// your first API endpoint... 
app.post('/api/shorturl/new', function(req, res) {
  
  // get & parse url
  let originalUrl = req.body.url;
  console.log("url is: ", originalUrl);
  let lookupUrl;
  
  // check for valid url: url starts with "http(s)://"
  if (originalUrl.search('http://') && originalUrl.search('https://')) {
     res.json({'error': 'invalid URL'});
  } else {
    // dns.lookup doesn't expect the http(s):// or '/'
    if (originalUrl.search('www') != -1) {
      lookupUrl = originalUrl.split('www.').pop();
      console.log("lookup URL without http: ", lookupUrl);
    } else {
      lookupUrl = originalUrl.split('://').pop();
    }
    lookupUrl = lookupUrl.split('/').shift();
    console.log(`lookup URL without '/': `, lookupUrl);
    
    dns.lookup(lookupUrl, (err, address) => {
      let num = undefined;  // stores the short_url number
      
      if (err) {
        res.json({'error': 'invalid URL'});
      } else {
        // save url & shortened pair in db
        ShortUrl.count({}, function (err, count) {
          num = count + 1;
          var shortUrl = new ShortUrl({
            original_url: originalUrl,
            short_url: num
          });
          shortUrl.save((err, data) => {
            if (err) {
              console.log('not saved', err);
              res.send('not working');
            } else {
              console.log('document saved');
              
              // respond with json
              ShortUrl.findOne({short_url: num}, (err, data) => {
                res.json({
                  'original_url': data.original_url,
                  'short_url': data.short_url
                });
              });
            }
          });
        });
        console.log('done');
      }
    });
  }
});

app.get('/api/shorturl/:num', function (req, res) {
  let num = req.params.num;
  ShortUrl.findOne({short_url: num}, (err, data) => {
    if (err) {
      res.send(`doesn't exist`);
    } else {
      res.redirect(data.original_url);
    }
  });
})
   

app.listen(port, function () {
  console.log('Node.js listening ...');
});