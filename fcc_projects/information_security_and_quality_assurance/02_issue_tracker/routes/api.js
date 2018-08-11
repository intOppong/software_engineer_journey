/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;

var bodyParser  = require('body-parser');
var ObjectId = require('mongodb').ObjectID;

module.exports = function (app, db) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      var project = req.params.project;
      var query = req.query;
      var collection = db.collection(project + '-issue-tracker');
      //console.log('QUERY', req.query);
    
      if (Object.keys(query).length) {
        
        for (let key in query) {
          if (query.hasOwnProperty(key) && key == 'open') {
            
            switch (query[key]) {
              case 'true':
                query[key] = true;
                break;
              case 'false':
                query[key] = false;
                break;        
            } 
          }
        }
        // console.log('QUERY after:', query);
        collection.find(query).toArray((err, doc) => {
          res.json(doc);
        }); 
      } else {
         collection.find({}).toArray((err, doc) => {
          if (err) {
            console.log('ERR: ', err);
            return;
          }
           res.json(doc)
        })
      }
    })
  
    .post(function (req, res){
      var project = req.params.project;
      var title = req.body.issue_title;
      var text = req.body.issue_text;
      var created_by = req.body.created_by;
      var collection = db.collection(project + '-issue-tracker');
      //console.log('BODY: ', req.body);
    
      // Save to db
      if (title && text && created_by) {
        collection.insertOne({
          issue_title: req.body.issue_title,
          issue_text: req.body.issue_text,
          created_by: req.body.created_by,
          assigned_to: req.body.assigned_to,
          status_text: req.body.status_text,
          open: true,
          created_on: new Date(),
          updated_on: new Date()
        }, (err, data) => {
          if (err) {
            console.log('could\'nt save Issue');
          } else {
              var doc = data.ops[0]
              console.log('RESULT: ', doc);
              res.json({
                _id: doc._id, 
                issue_title: doc.issue_title,
                issue_text: doc.issue_text,
                created_by: doc.created_by,
                created_on: doc.created_on,
                updated_on: doc.updated_on, 
                open: doc.open,
                assigned_to: doc.assigned_to,
                status_text: doc.status_text
              });
          }
        });
      }
      
    }) 
  
    .put(function (req, res){
      var project = req.params.project;
      var body = req.body
      var ctr = 0;
      var collection = db.collection(project + '-issue-tracker');
      //console.log('BODY: ', req.body); return;
    
      // Query Issue to Compare with User Input
      collection.find(ObjectId(body._id)).toArray((err, doc) => {
        if (err) {
          console.log('ERR: ', err);
        } else {
          var issue = doc[0];
          
          // Form Fields you can set are 5
          for (let key in body) {
            if (key !== '_id' && key !== 'open') {
              if (!body[key].length) {
                ctr++;
              }
            }
          }
          
          if (ctr == 5 && body.open == undefined) {  
            res.send('no updated field sent');
            return; 
          }
          
          // Update Issue
          collection.updateOne(
            {_id: ObjectId(body._id)}, 
            {
              $set: {
                issue_title: body.issue_title ? body.issue_title : issue.issue_title, 
                issue_text: body.issue_text ? body.issue_text : issue.issue_text, 
                created_by: body.created_by ? body.created_by :  issue.created_by, 
                assigned_to: body.assigned_to ? body.assigned_to : issue.assigned_to, 
                status_text: body.status_text? body.status_text : issue.status_text,
                open: body.open == undefined ? issue.open : false,
                updated_on: new Date()
              }
            }, (err, result) => {
              if (err) {
                res.send('could not update' + body._id);
                return;
              }
              res.send('successfully updated');
            }
          );
          
        }
      });
      
    }) 
  
    .delete(function (req, res){
      var project = req.params.project;
      var issue_id = req.body._id
      var collection = db.collection(project + '-issue-tracker');
      //console.log('BODY: ', req.body);
    
      if (!issue_id) {
        return res.send('_id error');
      }
      
      collection.deleteOne({_id: ObjectId(req.body._id)}, (err, result) => {
          if (err) {
            res.send('could not delete' + req.body._id);
            return;
          }
          res.send('deleted ' + req.body._id)
        });
      
    });
    
};  // module.exports