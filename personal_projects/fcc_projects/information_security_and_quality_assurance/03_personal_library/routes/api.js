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


module.exports = function (app, db) {
  const collection = db.collection('books');
        
  app.route('/api/books')
    .get(function (req, res){
      
      collection.find({}).toArray((err, books) => {
        if (err) return console.log('ERROR: ', err);
        
        for (let book of books) {
          var keys = Object.keys(book)
          for (let key of keys) {
            if (key == 'comments') delete book[key];
          }
        }
        res.json(books)
      });
      
    })
    
    .post(function (req, res){
      var title = req.body.title;
      //response will contain new book object including atleast _id and title
      console.log('BODY', req.body);
      if (!title) {
        return res.send('Book title is required');
      }
    
      collection.insertOne({
        title: title,
        comments: [],
        commentcount: 0,
      }, (err, result) => {
        if (err) return console.log('ERROR: ', err);
        var book = result.ops[0]
        res.json({
          _id: book._id,
          title: book.title
        })
      })
    
    })
    
    .delete(function(req, res){
    
      collection.deleteMany({}, (err, result) => {
        if (err) return console.log('ERROR: ', err);
        res.send('complete delete successful');
      });
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      var bookid = req.params.id;
      
      if(!isObjectId(bookid)) return res.send('no book exists'); 
    
      collection.findOne(ObjectId(bookid), (err, book) => {
        if (err) {
          res.send('no book exists');
          return console.log('ERROR: ', err);
        }
        
        for (let key in book) {
          if (key == 'commentcount') delete book[key];
        }
        res.json(book)
      });
    })
    
    .post(function(req, res){
      var bookid = req.params.id;
      var comment = req.body.comment;
    
      collection.findOne(ObjectId(bookid), (err, book) => {
        if (err) return console.log('ERROR: ', err);
        var comments = book.comments
        comments.push(comment);
        collection.updateOne(
          {_id: ObjectId(bookid)}, 
          {
            $set: {
              comments: comments,
              commentcount: comments.length
            }
          }                 
        );
        
        for (let key in book) {
          if (key == 'commentcount') delete book[key];
        }
        res.json(book)
      });
    
    })
    
    .delete(function(req, res){
      var bookid = req.params.id;
      //if successful response will be 'delete successful'
      
      collection.deleteOne({_id: ObjectId(bookid)}, (err, result) => {
        if (err) return console.log('ERROR: ', err);
        res.send('delete successful')
        
      });
      
    });
  
};

function isObjectId(id) {
  if (id.match(/^[0-9a-fA-F]{24}$/)) return true;  
  else return false;
}