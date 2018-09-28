const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');

const keys = require('./config/keys')
require('./models/User');
require('./models/Survey');
require('./modules/auth');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);
require('./routes/billing')(app);
require('./routes/survey')(app);

if (process.env.NODE_ENV === 'production') {

  // Serve up Production Assets
  app.use(express.static('client/build'));

  // for any other routes (ie routes we've not defined in express), serve up the index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
