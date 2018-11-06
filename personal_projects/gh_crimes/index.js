const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');

const keys = require('./config/keys');
const routes = require('./routes')

const app = express();
const router = express.Router();

// DB CONNECTION

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
}).then( () => console.log('Database Connection Successful') )
  .catch(err => console.log('Database Connection Error:', err))


// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(passport.initialize());
app.use(passport.session());

routes(router)

// Not Found
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});


const listener = app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port: ' + listener.address().port);
})
