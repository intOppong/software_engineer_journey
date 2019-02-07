const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  relpy: [{
    body: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Number, default: 0 },
    created_on: Date
  }],
  likes: Number,
  created_on: Date
});

mongoose.model('Comments', CommentSchema);
