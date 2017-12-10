const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    console.log('232222223134234234')
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 dollars for 5 credits',
      source: req.body.id
    })

    req.user.credits += 5
    console.log('credits', req.user.credits)
    const user = await req.user.save()

    res.send(user)
  })
} 