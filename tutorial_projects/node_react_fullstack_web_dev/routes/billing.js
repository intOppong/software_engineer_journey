const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // ref to stripe API Link: https://stripe.com/docs/api?&lang=node#create_charge
    // create a charge: stripe uses it to create & returns a full charge object (through async) NOTE: if the charge was successful
    const charge = await stripe.charges.create({         // use matching details used in the stripe form in the front end
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id      // id of the token Object: it identifies the Authorization of the Charge/Billing to be made
    });

    // Add credits to user's Balance
    req.user.credits += 5;

    const user = await req.user.save();

    res.send(user);
  });
}
