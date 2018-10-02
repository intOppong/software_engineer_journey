const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../modules/Mailer');
const surveyTemplate = require('../views/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for feedback');
  })

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // Create a Survey
    const survey = new Survey({
      title: title,
      subject,
      body,
      recipients: recipients.split(',').map( email => ({ email })),
      _user: req.user.id,
      date: Date.now()
    });

    // Create the email Template
    // Create & Send the Mailer Object - using Sendgrid
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(422).send(err)
    }

  });

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  })
}
