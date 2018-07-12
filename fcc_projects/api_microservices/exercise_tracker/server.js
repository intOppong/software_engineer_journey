const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track' )

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// Database Setup
var exerciseTrackerSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  count: {type: Number, default: 0},
  log: [
    {
      description: { type: String, required: true, lowercase: true},
      duration: {type: Number, required: true},
      date: { type: Date, default: Date.now },
    }
  ]
});

// Global Variables
let userId;
var User = mongoose.model('ExerciseTracker', exerciseTrackerSchema);

// Create new User
app.post('/api/exercise/new-user', (req, res) => {
  let username = req.body.username;
  
  // check if db is not empty
  User.count({}, (err, count) => {
    if (err) {
      console.log('count error: ', err);
    }
    
    if (count != 0) {  
      // check if user exists
      User.findOne({username: username}, (err, user) => {
        if (err) {
          console.log('find() error', err);
        }  
        if (user === null) {
          console.log('user does not exists');
          createNewUser(username, res);
        } else {
          res.send('username already taken'); 
        }
      });
    } else {
      // create new(first) user
      createNewUser(username, res);
    }
  });
  
  
});

app.post('/api/exercise/add', (req, res) => {
  
  User.findById(req.body.userId, (err, user) => {
    if (err) {
      console.log('findbyId() error', err) 
    }
    if (user === null) {
      res.send('user does not exist');
    }
    console.log('user found');

    // update user document
    
    user.log.push({
      'description': req.body.description,
      'duration': req.body.duration,
      'date': req.body.date
    });
    console.log("after adding: ", user);
    
    user.count = user.log.length;
    user.save((err, updatedData) => {
      if (err) {
        console.log(err);
      } 
      
      console.log("after saving: ", user);
      console.log('document updated')
    });
    
    
    // respond with json
    let log = user.log.pop();
    res.json({
      'username': user.username,
      'description': log.description,
      'duration': log.duration,
      '_id': user._id,
      'date': log.date
    });   
  });
});

app.get('/api/exercise/log', (req, res) => {
  User.findById(req.query.userId, (err, user) => {
    res.json({
      '_id': user._id,
      'username': user.username,
      'count': user.count,
      'log': user.log
    });
  });
});


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

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


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})



// FUNCTIONS
var createNewUser = (username, res) => {
  // create new user
  var user = new User({
    username: username,
    count: 0,
  });
  user.save((err, user) => {
    if (err) {
      console.log(err) 
    } else {
      console.log('document saved');

      // respond with json
      User.findOne({username: username}, (err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            'username': user.username,
            '_id': user._id
          });
        }
      });
    }
  });
}