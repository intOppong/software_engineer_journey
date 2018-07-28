var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('lodash');
  // data modules
var users = require('../data/users.json');


passport.use(new LocalStrategy(function (username, password, done) {  // username is from the login form input field with name'username'
  var user = _.find(users, u => u.name === username);
  if (!user || user.password !== password) return done(null, false);
  return done(null, user);
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
})
passport.deserializeUser(function(id, done) {
  var user = _.find(users, u => u.id === id);
  done(null, user);
});
