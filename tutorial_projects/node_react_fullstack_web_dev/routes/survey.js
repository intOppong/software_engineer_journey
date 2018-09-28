const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../modules/Mailer');
const surveyTemplate = require('../views/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.post('/api/surveys', requireLogin, requireCredits, (req,res) => {
    const {title, subject, body, recipients, } = req.body;

    // Create a Survey
    const survey = new Survey({
      title: title,
      subject,
      body,
      recipients: recipients.split(',').map( email => ({email})),
      _user: req.user.id,
      date: Date.now()
    });

    // Create the email Template

    // Create the Mailer Object - using Sendgrid
    const mailer = new Mailer(survey, surveyTemplate(survey));

  })


}
