const sendGrid = require('sendGrid');

const keys = require('../config/keys')

const helper = sendGrid.mail;

class Mailer extends helper.Mail {
  constructor ({ subject, recipients }, content) {
    super();

    // required fields for the mailer object
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content(content);
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    let emails = [];
    return recipients.map( ( {email} ) => {
      return new helper.Email(email);
    })
  }
}

module.exports = Mailer;
