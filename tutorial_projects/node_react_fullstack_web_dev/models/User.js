const mongoose = require('mongoose');
const { Schema } = mongoose;

// SCHEMAS
const userSchema = new Schema({
  googleId: String,
  credits: {type: Number, default: 0}
});
const testSchema = new Schema({
  name: String,
});

// MODELS
mongoose.model('users', userSchema)
