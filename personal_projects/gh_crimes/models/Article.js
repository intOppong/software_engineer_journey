const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _comments: { type: Schema.Types.ObjectId, ref: 'Comments' },
  views: { type: Number, default: 0 },
  categories: [String],
  tags: [String],
  created_on: Date,
  updated_on: Date,
  isLive: {type: Boolean, default: false}
});

mongoose.model('Articles', ArticleSchema);
