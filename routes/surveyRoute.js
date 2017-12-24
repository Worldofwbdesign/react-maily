const mongoose = require('mongoose')
const _ = require('lodash')
const Path = require('path-parser')
const { URL } = require('url')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const sgMail = require('@sendgrid/mail')
const Mailer = require('../services/Mailer')
const surveysTemplate = require('../services/emailTemplates/surveysTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {

  app.post('/api/surveys/webhooks', async (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice')

    const events = _chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname)

        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice }
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .value()

    console.info(events)

    res.send(events)
  })

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients, fromEmail = 'no-reply@emaily.com'} = req.body
    const recipientsArr = recipients.split(',')
    
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipientsArr.map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    })

    //Great place to send an email!
    const mailer = new Mailer(survey, surveysTemplate(survey), fromEmail)

    try {
      mailer.send()
      survey.save()
      req.user.credits -= recipientsArr.length
      const user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}