// REQUIRE MODULES
const express = require('express');
const app = express();
const http = require('http').Server(app); // bind app to http (A)
const io = require('socket.io')(http);
const path = require('path');
const mongo = require('mongodb').MongoClient;
  // App Modules
const routes = require('./routes/routes');
  // App Constants
const DATABASE = 'mongodb://lord:lord10@ds020218.mlab.com:20218/socket-io';

// SETTINGS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MIDDLEWARE
app.use(express.static("public"));

// DATABASE CONNECTION
mongo.connect(DATABASE, (err, client) => {

if (err) console.log('Unable to connect', err);

db = client.db('socket-io');
console.log('Database Connection Established');

routes(app, db);

// Connect to socket.io
io.on('connection', function(socket) {

  // Get chat from mongo Collection
  let chats = db.collection('chats');
  chats.find().limit(100).sort({_id:1}).toArray((err, res) => {
    if (err) console.log('Unable to retrieve Chats', res);

    // Emit results to Client
    socket.emit('output', res);
  });

  // Handle user input event
  socket.on('input', function(data) {
    let name = data.name;
    let message = data.message;

    // check for name & message
    if (name == '' || message == '') {
      sendStatus('Please enter a name & message');
    } else {
      // insert message in database

      chats.insert({name: name, message: message}, () => {
        // emit message to all connected clients
        io.emit('output', [data]);

        // Send status to client
        sendStatus({
          message: 'Message sent',
          clear: true
        });
      })
    }
  });

  // Handle Clear
  socket.on('clear', (data) => {
    // Clear all chats from collection
    chats.remove({}, () => {
      // Emit Cleared
      socket.emit('cleared');
    });
  })



  /*
    ===============================================
    Functions
    ===============================================
  */
  function sendStatus(s) {
    socket.emit('status', s);
  }

});


http.listen(3000, function(){
  console.log('listening on port:3000');
});

});

/*
  ===============================================
  Functions
  ===============================================
*/


/***** Begginner Code i wrote from Socket.io site ******/
/*
io.on('connection', function(socket){
  console.log('a user is connected');
  io.emit('welcome', 'New user has Joined');


  socket.on('chat message', function(msg){  // receive message from client
    //console.log('message: ' + msg);
    io.emit('chat message', msg); // broadcast to everyone
  });
});
*/
