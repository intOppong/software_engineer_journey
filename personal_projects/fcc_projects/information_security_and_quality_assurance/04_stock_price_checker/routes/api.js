
'use strict';

const expect = require('chai').expect;
const bodyParser  = require('body-parser');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const ObjectId    = require('mongodb').ObjectID;

var StockHandler = require('../controllers/stockHandler.js');

module.exports = function (app, db) {
  const collection = db.collection('stock');
  
  app.route('/api/stock-prices')
    .get(function (req, res){
    
      const stockHandler = new StockHandler();
      
      let stock;
      if (req.query.only_stock) {
        stock = req.query.only_stock.toUpperCase().replace(/ /g,'');
      } else if (req.query.stock_1) {
        stock = req.query.stock_1.toUpperCase().replace(/ /g,'');
      } else if (req.query.stock_2) {
        stock = req.query.stock_2.toUpperCase().replace(/ /g,'');
      }
      
      let like = req.query.like || false;
      
      let request = new XMLHttpRequest();
      let url = `https://www.alphavantage.co/query?apikey=88BPZDWXBKP4B7PZ&function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}`;
    
      request.open('GET', url, true);
      request.onload = function () {
        
        let data = JSON.parse(this.responseText);
        if (data['Error Message']) {
          console.log('Wrong Stock Ticker');
          return res.send('Wrong Stock Ticker');
        }
        
        // Get the 'price'
        let price = stockHandler.getStockPrice(data);
        
        collection.findOne({stock: stock}, (err, doc) => {
          let new_ip;
          let ip_addresses = [];
          
          if (!doc) {  // insert new stock 
            
            if (like) {  
              new_ip = req.headers['x-forwarded-for'].split(",")[0];
              ip_addresses.push(new_ip);
            } 
            
            collection.insert({
              stock: stock,
              price: price,
              ip_addresses: ip_addresses
            }, (err, doc) => {
              if (err) return console.log('ERR: could not save', err);
              
              res.json({
                stock: stock,
                price: price,
                likes: doc.ops[0].ip_addresses.length
              });
            })
          } else {  // update existing stock
            
            let existing_ip = false;
            ip_addresses = doc.ip_addresses;
            if (req.headers['x-forwarded-for']) {
              new_ip = req.headers['x-forwarded-for'].split(",")[0];
            } else {
              new_ip = null;
            }
            
            for (let val of doc.ip_addresses) {
              if (val == new_ip) {
                existing_ip = true;
              }
            } 
            
            if (like && !existing_ip && new_ip) {
              ip_addresses.push(new_ip) 
            }
            console.log('IP_ADDRESSES:', ip_addresses);
            
            collection.findOneAndUpdate(
              {stock: doc.stock},
              {$set: {
                price: price,
                ip_addresses: ip_addresses
              }}, {
                returnOriginal: false
              }, (err, doc) => {
                if (err) return console.log('err: could not update', err);
                console.log('UPDATED', doc.value);
                
                res.json({
                  stock: stock,
                  price: price,
                  likes: doc.value.ip_addresses.length
                });
              }
            )
          }
          
        }); // End findOne
      }  // End onload

      request.send();
    
    }) // End Get
};

