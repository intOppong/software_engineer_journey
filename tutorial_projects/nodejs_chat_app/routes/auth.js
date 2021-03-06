var router = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('lodash');
  // Our Modules
require('../modules/auth');
    // data modules
var users = require('../data/users.json');

module.exports = router;



// LOGIN automatically in Development mode
/*
router.get('/login', (req, res, next) => {
  if(req.app.get('env') === 'development') {

    var user = users[0];
    if (req.query.user) user = _.find(users, u => u.name === req.query.user)

    req.logIn(user, function(err) {
      if (err) {return next(err)};
      return res.redirect('/');
    })
  }
  res.render('login', { title: "Login", login: true});
})
*/
router.route('/login')
  .get((req, res) => {
    res.render('login', { title: "Login", login: true});
  })
  .post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})
