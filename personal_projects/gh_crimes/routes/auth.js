const passport = require('passport');

const strategies = {
  google: 'google'
}

module.exports = router => {

  router.get('/auth/google', passport.authenticate(strategies.google, {
    scope: ['profile', 'email']
  }))

  router.get('/auth/google/callback',
    passport.authenticate(strategies.google, {failureRedirect: '/'}),
    (req, res) => {
      res.redirect('/')
    })
}
