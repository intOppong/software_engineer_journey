const mongoose = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../modules/Mailer');
const surveyTemplate = require('../views/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.route('/api/surveys')
    .get(requireLogin, async (req, res) => {
      const surveys = await Survey
        .find({ _user: req.user.id })
        .select({recipients: false})
        .sort('-date');

      res.send(surveys);
    })

    .post(requireLogin, requireCredits, async (req, res) => {
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

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for feedback');
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    const events = _.chain(req.body)
      .map(({ event, url, email }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice }
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false}
            }
          },
          {
            $set: { 'recipients.$.responded': true },
            $inc: { [choice]: 1 },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value()

    console.log('Events:', events);

    res.send({});
  })
}
