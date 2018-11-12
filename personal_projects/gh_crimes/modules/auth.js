
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('Users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/api/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ provider_id: profile.id });
      if (user) {
        return done(null, user);
      }
      const { id, displayName, emails, photos, provider } = profile
      user = await User({
          provider_id: id,
          name: displayName,
          email: emails[0].value,
          profile_img: photos[0].value,
          provider
        }).save();

      console.log('New User Saved');
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user));
})
