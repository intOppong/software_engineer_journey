const mongoose = require('mongoose');
const { Schema } = mongoose;

// SCHEMAS
const userSchema = new Schema({
  googleId: String
});

// MODELS
mongoose.model('users', userSchema)
