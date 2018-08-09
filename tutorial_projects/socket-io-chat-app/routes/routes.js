
module.exports = function (app, db) {

/*
  ===============================================
  Index Route
  ===============================================
*/
app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

/*
  ===============================================
  Section Route
  ===============================================
*/


}
