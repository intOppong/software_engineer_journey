const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  _author: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  title: String,
  description: String,
  feature_img: { type:String, default: '' },
  likes: [Schema.Types.ObjectId],
  created_on: Date,
  updated_on: Date,
  comments: [
    {
      _author: { type: Schema.Types.ObjectId, ref: 'User' },
      text: String,
      created_on: Date,
      updated_on: Date,
      likes: [Schema.Types.ObjectId]
    }
  ]
});

module.exports = mongoose.model('Article', ArticleSchema)

ArticleSchema.methods.like = function(user_id) {
  this.likes.push(user_id)
  return this.save()
}
ArticleSchema.methods.comment = function(c) {
  this.comments.push(c)
  return this.save()
}


/*
I think it will evovle to this

  // where links will be inserted into the produced html file at appropriate places
let ArticleSchema = new mongoose.Schema({
  body: String,
  title: String,
  description: String,
  links: {
    images: [Strings],      // ie images: ['url1', 'url2',...]
    videos: [Strings],
    external_sites: [Strings]
  }
  feature_img: String,
  claps: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

*/
