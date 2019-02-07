const mongoose = require('mongoose');

const Article = mongoose.model('Articles');

module.exports = router => {
  router.post('/article/create', async (req, res) => {
    const { body, title } = req.body
    const cleanBody = body.replace(/<p.*>&nbsp;<\/p>/g, '')
    console.log('BODY:', cleanBody);

    // const article = await Article({
    //   title,
    //   body
    // }).save()
  })
}
