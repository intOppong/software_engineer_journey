const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  profile_img: String,
  provider: String,
  provider_id: String,
  role: {type: String, default: 'Member'}
})

mongoose.model('Users', UserSchema);
