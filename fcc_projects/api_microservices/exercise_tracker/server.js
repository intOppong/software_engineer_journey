// REQUIRE MODULES
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// DATABASE CONNECTION
mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track' );


// MIDDLEWARE
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'));

  // Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

// Database Setup
  // stores user info
var userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true}
});
  // stores exercise log for users
var logSchema = mongoose.Schema({
  userId: {type: String, required: true},
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date, default: Date.now},
  unique_required: {type: Number, unique: true}
});

var UserModel = mongoose.model('Exercise_User', userSchema);
var LogModel = mongoose.model('Exercise_log', logSchema);


// ROUTE HANDLERS
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/exercise/new-user', (req, res) => {
  let username = req.body.username;
  
  UserModel.count({username: username}, (err, count) => {
    if (err) {
      console.log('count error: ', err);
      res.send('database error');
    }
    
    if (count > 0) {  
      res.send('user already exists');
    } else {
      var user = new UserModel({username: username});
      user.save((err, user) => {
        if (err) {
          console.log(err);
          res.send(`couldn't save user`);
        } else {
          res.json({'username': user.username, '_id': user._id});
        }
      });
    }
  });
});

app.post('/api/exercise/add', (req, res) => {
  let logData = req.body;
  
  UserModel.count({_id: logData.userId}, (err, count) => {
    if (err) {
      console.log('count error: ', err);
      res.send('database error'); 
    }
    
    if (count <= 0) {
      res.send('user does not exist')
    } else if (typeof count !== 'undefined') {
      // create new Log for user
      LogModel.count({}, (err, count) => {
        var log = new LogModel({
          userId: logData.userId,
          description: logData.description,
          duration: logData.duration,
          date: logData.date, 
          unique_required: count + 1
        });
        
        UserModel.findById(logData.userId,(err, user) => {
          log.save((err, log) => {
            if (err) {
              console.log(err);
            } else {
              res.json({
                'username': user.username,
                'description': log.description,
                'duration': log.duration,
                '_id': log.userId,
                'date': log.date
              });
            }
          });  
        });
      });   
    }
  })
});

app.get('/api/exercise/log', (req, res) => {
  if (!req.query.userId) res.send('userId is required');
  
  let userId = req.query.userId;
  let from = req.query.from;
  let to = req.query.to;
  let limit = req.query.limit;

  let q = LogModel.find({userId: userId});
  
  if (from && to) 
    q.where('date').gt(new Date(from)).lt(new Date(to));
  else if (from)
    q.where('date').gt(new Date(from));
  else if (to)
    q.where('date').lt(new Date(to));
  
  if (limit)
    q.limit(Number(limit));
  
  q.exec((err, logs) => {
    
    if (err) 
      res.send('query error');
    else { 
      // trim log document
      let outputlog = [];
      for (let log of logs) {
        outputlog.push((({description, duration, date}) => ({description, duration, date}))(log));
      }
      
      // resond with json
      UserModel.findById(userId, (err, user) => {
        if (err) 
          res.send('user not found');
        else 
          res.json({
            '_id': user._id,
            'username': user.username,
            'count': logs.length,
            'log': outputlog
          });         
      });
    }     
  });    
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})