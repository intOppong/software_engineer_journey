/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next){
      if (req.query.input) {
        
        var input = req.query.input;
      
        var initNum = convertHandler.getNum(input);
        if (typeof initNum !== 'number') {
          res.send('invalid number');
        }
        console.log('number is: ',initNum);
        
        
        var initUnit = convertHandler.getUnit(input);
        if (initUnit === null) {
          res.send('invalid unit');
        }
        if (typeof initNum !== Number && initUnit === null) {
          res.send('invalid unit & number');
        }
        console.log('unit is: ', initUnit);
        
        var returnNum = convertHandler.convert(initNum, initUnit.toLowerCase());
        var returnUnit = convertHandler.getReturnUnit(initUnit.toLowerCase());
        var toString = convertHandler.getString(initNum, initUnit.toLowerCase(), returnNum, returnUnit);
        
        res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: toString
        })
      } else {
        res.send('Input is Invalid');
      }
      
    });

    
};
