const sendGrid = require('sendGrid');

const keys = require('../config/keys')

const helper = sendGrid.mail;

class Mailer extends helper.Mail {
  constructor ({ subject, recipients }, content) {
    super();

    this.sgApi = sendGrid(keys.sendGridKey);  // returns an Object we can use to communicate with sendgrid API

    // required fields to Construct the mailer object
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); // add body to the actual mail
    this.addRecipients(); // add the recipients to the actual mail

    this.addClickTracking();  // Enable Click Tracking: allows sendgrid to replace all links with their custom links

  }

  formatAddresses(recipients) {
    return recipients.map( ({ email }) => {
      return new helper.Email(email);
    })
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);  // sends Mailer Object to sendgrid
    return response;
  }
}

module.exports = Mailer;
