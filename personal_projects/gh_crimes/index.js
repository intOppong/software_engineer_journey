const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');
const routes = require('./routes')
require('./models/User');
require('./services/auth');

const app = express();
const router = express.Router();

// DB CONNECTION
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
}).then( () => console.log('Database Connection Successful') )
  .catch(err => console.log('Database Connection Error:', err))


// MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);

routes(router);

app.get('/', (req,res) => res.send('home'))

// Not Found
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});


const listener = app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port: ' + listener.address().port);
});
