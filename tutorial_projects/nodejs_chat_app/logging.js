var fs = require('fs');

// Logging & Debugging
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
module.exports = require("morgan")('combined', {stream: accessLogStream}); 	// combined: an example format of logging used with morgan'
