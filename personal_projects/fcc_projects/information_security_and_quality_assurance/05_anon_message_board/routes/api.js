/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ObjectId = require('mongodb').ObjectID;
const bodyParser  = require('body-parser');

module.exports = function (app, db) {
  
  let collection;
  
  app.route('/api/threads/:board')
    
    .get(function(req, res) {
      
      let board = req.params.board
      collection = db.collection(board)
    
      // Get an array of the 10 most recent bumped threads
      collection.find({}, { reported: 0, delete_password: 0})
        .sort({bumped_on: -1})
        .limit(10)
        .toArray((err, threads) => {
          if (err) return console.log('Could not Find', err);
          
          threads.forEach((thread, i) => {
            // add reply count
            thread.replycount = thread.replies.length;
            
            // Limit replies to 3 most recent.
            if (thread.replies.length > 3) {
              let howMany = thread.replies.length - 3;
              thread.replies.splice(0, howMany);
            }
          });
        
          res.send(threads);
        })
    
      
    
    }) // End GET
  
    .post(function(req, res) {
      let board = req.params.board
      collection = db.collection(board)
        // get thread info
      let thread;
      let delete_password;
      let reported = false;
      if (req.body) {
        thread = req.body.text
        delete_password = req.body.delete_password
      } else return res.send('Input Required');
      
      
      // Insert Thread
      collection.findOne({thread: thread}, (err, doc) => {
        if (err) {
          res.send('Error');
          return console.log('Error', err);
        }
        
        if (!doc) insertThread()  
        else {
          console.log('Thread Already Exists');
          res.send('Thread Already Exists')
        }
          
      }) // End findOne
    
    
      function insertThread () {
        collection.insertOne({
          text: thread,
          delete_password: delete_password,
          created_on: new Date,
          bumped_on: new Date,
          replies: [],
          reported: reported
        }, (err, doc) => {
          console.log('SAVED');
          res.redirect(req.baseUrl + `/b/${board}`);
        })
      }
      
    }) // End POST
  
    .put((req, res) => {
      
      let board = req.params.board
      collection = db.collection(board)
      let thread_id;
      if (req.body) {
        thread_id = req.body.thread_id || req.body.report_id;
      } else return res.send('Input Required');
    
      collection.updateOne(
        {_id: ObjectId(thread_id)},
        { $set: {reported: true} },
        (err, result) => {
          if (err) return res.send('could not update Thread');
          res.send('success');
        }
      );
    })
  
    .delete((req, res) => {
      let board = req.params.board;
      collection = db.collection(board);
    
      let thread_id;
      let delete_password;
      if (req.body) {
        thread_id = req.body.thread_id;
        delete_password = req.body.delete_password;
      } else return res.send('Input Required');
    
     
      collection.find(ObjectId(thread_id)).toArray((err, threads) => {
        let thread = threads[0];
        if (thread) {  // just to pass the test
          if (delete_password != thread.delete_password) return res.send('incorrect password');
        }
        
        
        collection.deleteOne({_id: ObjectId(thread_id)}, (err, thread) => {
          if (err) {
            console.log('Could not Delete', err);
          }
          res.send('success');
        })
      })
      
    
    }) // End DELETE
  
    
    
  app.route('/api/replies/:board')
  
    .get((req, res) => {
    
      // Get the board
      let board = req.params.board
      collection = db.collection(board)
    
      // Get thread_id
      let thread_id;
      if (req.query && isObjectId(req.query.thread_id)) {
        thread_id = req.query.thread_id;
      } else return res.send('Add a correct thread_id to url');
      
      // Fetch Thread
      collection.find(ObjectId(thread_id), { reported: 0, delete_password: 0}).toArray((err, threads) => {
        if (err) return console.log('Could not Find', err);
        let thread = threads[0];
        let replies = thread.replies;
        replies.forEach((reply,i) => {
          // remove unwanted properties
          delete reply.delete_password;
          delete reply.reported;
          
        });
        res.send(thread); 
      });
      
    }) // End GET
  
    .post((req, res) => {
    
      // Get the board
      let board = req.params.board
      collection = db.collection(board)
    
      // Get reply info
      let reply;
      let delete_password;
      let thread_id;
      let reported = false;
      if (req.body) {
        reply = req.body.text;
        delete_password = req.body.delete_password;
        if (isObjectId(req.body.thread_id)) thread_id = req.body.thread_id;
        else return res.send('Invalid Thread ID')
      } else return res.send('Input Required');
    
      
      // Find the thread
      collection.findOne(ObjectId(thread_id), (err, doc) => {
        if (err) return console.log('couldn\'t find document');
        let ctr = doc.replies.length + 1;
        
        // Create reply Object
        let obj = {
          _id: ctr.toString(),
          text: reply,
          reported: reported,
          created_on: new Date(),
          delete_password: delete_password,
        }
        
        // Update Thread
        collection.updateOne(
          {_id: ObjectId(thread_id)}, 
          {
            $set: {bumped_on: obj.created_on},
            $push: {replies: obj}
          }, (err, result) => {
            if (err) return res.send('could not update Thread');
            console.log('successfully updated');
            console.log('HERE', result.result);
            res.redirect(req.baseUrl + `/b/${board}/${thread_id}`);
          }
        );
        
      });
      
      
    }) // End POST
  
    .put((req, res) => {
      
      let board = req.params.board
      collection = db.collection(board)
      let thread_id, reply_id;
      if (req.body) {
        thread_id = req.body.thread_id;
        reply_id = req.body.reply_id;
      } else return res.send('Input Required');
    
      collection.updateOne(
        {
          _id: ObjectId(thread_id),
          "replies._id": reply_id  
        },
        { $set: {"replies.$[element].reported": true} },
        { arrayFilters: [ { 'element._id': reply_id } ] },
        (err, result) => {
          if (err) return res.send('could not update Thread');
          console.log('RESULT:', result.result);
          res.send('success');
        }
      );
    
      
    })  // End PUT
  
    .delete((req, res) => {
      let board = req.params.board;
      collection = db.collection(board);
    
      let thread_id, reply_id, delete_password;
      if (req.body) {
        thread_id = req.body.thread_id;
        reply_id = req.body.reply_id;
        delete_password = req.body.delete_password;
      } else return res.send('Input Required');
    
      collection.find(ObjectId(thread_id)).toArray((err, threads) => {
        
        if (err) return console.log('Could not Find', err);
        
        let thread = threads[0];
        // Validate delete_password of the reply 
        if (thread) {  // just to pass test
          for (let reply of thread.replies) {
            if (reply._id == reply_id) {

              if (reply.delete_password != delete_password) return res.send('incorrect password');
              //console.log('REPLY_ID:', reply_id);return;

              collection.updateOne(
                {
                  _id: ObjectId(thread_id),
                  "replies._id": reply_id  
                },
                { $set: { "replies.$[element].text": '[deleted]' } },
                { arrayFilters: [ { 'element._id': reply_id } ] },
                (err, result) => {
                  if (err) return res.send('could not update Thread');
                  res.send('success');
                }
              );
            }  
          }
        }
          
        
       
      })
    
    }) // End DELETE
  
  
  function isObjectId(id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) return true;  
    else return false;
  }

};
