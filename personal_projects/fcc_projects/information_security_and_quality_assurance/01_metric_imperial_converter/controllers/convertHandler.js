/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var i = getFirstAlphaIndex(input);
    if (i === null) {
      return result = null;
    }
    if (isNaN(input[0])) {
      return result = null;
    }
    
    result = input.substring(0, i);
    
    if (Number(result) === 0) {
      result = 1;
    } else if (result.search('/') !== -1) {
        if (result.match(/\//g).length !== 1) {
          return result = null;
        }
        var nums = result.split('/')
        result = nums[0] / nums[1];
    }
    return Number(result);
  };
  
  this.getUnit = function(input) {
    var i = getFirstAlphaIndex(input);
    var unit = input.substring(i);
    var result;
    
    switch (unit.toLowerCase()) {
      case 'gal': case 'l': case 'kg': case 'lbs': case 'km': case 'mi':
        result = unit;
        break;
      default:
        result = null     
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch (initUnit) {
      case 'l':
        result = 'gal';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = null     
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit) {
      case 'l':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = null  
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = null;
    }
          
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var fullInitUnit = this.spellOutUnit(initUnit)
    var fullReturnUnit = this.spellOutUnit(returnUnit);
    var result
    if (fullInitUnit && fullReturnUnit) {
      result = `${initNum} ${fullInitUnit} converts to ${returnNum.toFixed(5)} ${fullReturnUnit}`;
    }
  
    return result;
  };
  
}

module.exports = ConvertHandler;


// FUNCTIONS
  function getFirstAlphaIndex(str) {
    for (let i = 0; i < str.length; i++ ) {
      if (isNaN(str[i])) {
         if (str[i] !== '.' && str[i] !== '/') {
           return i;
         }
      }
    }
    return null;
  }