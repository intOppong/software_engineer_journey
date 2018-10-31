const Article = require('../models/Article')
const User = require('../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {

addArticle: (req, res, next) => {
  let { text, title, likes, description } = req.body
  let article = {
    text, title, likes, description,
    created_on: Date.now(),
    updated_on: Date.now(),
  }
  if (req.files.image) {
    cloudinary.uploader.upload(
      req.files.image.path,
      (result) => {
        article['feature_img'] = result.url ? result.url : ''
        saveArticle(article);
      },
      {
        resource_type: 'image',
        eager: [
          {effect: 'sepia'}
        ]
      }
    )
  } else {
    saveArticle(article);
  }

  function saveArticle(article) {
    Article(article).save((err, article) => {
      if (err)
        res.send(err)
      else if (!article)
        res.sendStatus(400)
      else
        res.send(article)
      next()
    })
  }
},  // addArticle

getAll: (req, res, next) => {
  Article.find(req.params.id)
    .populate('author')
    .populate('comments._author')
    .exec((err, article)=> {
      if (err)
          res.send(err)
      else if (!article)
          res.sendStatus(404)
      else
          res.send(article)
      next()
    })
},
/**
 * article_id
 */
likeArticle: (req, res, next) => {
  const { article_id } = req.body;

  Article.findById(article_id)
    .then((article) => {
      return article.like(req.user.id).then(() => {
        return res.json({msg: "Done"})
      })
    })
    .catch(next)
},

commentArticle: (req, res, next) => {
  const { comment, article_id, author_id } = req.body;
  Article.findById(article_id).then((article)=> {
      return article.comment({
        _author: req.body.author_id,
        text: req.body.comment,
        created_on: Date.now(),
        updated_on: Date.now()
      }).then(() => {
        return res.json({msg: "Done"})
      })
  }).catch(next)
},

getArticle: (req, res, next) => {
  Article.findById(req.params.id)
  .populate('author')
  .populate('comments.author').exec((err, article)=> {
    if (err)
      res.send(err)
    else if (!article)
      res.send(404)
    else
      res.send(article)
    next()
  })
}

} // Module.Export
