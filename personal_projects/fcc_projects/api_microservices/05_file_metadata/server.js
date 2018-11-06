'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer');

var app = express();
var upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  let file = req.file;
  res.json({filename: file.filename, size: file.size});
});

const listen = app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening on port', listen.address().port);
});
