const mailgun = require('mailgun-js')({apiKey: 'key-bdc9654b2457a9a45b2d98435896d447', domain: 'glovoapp.com'})
const _ = require('lodash')
const admin = require('firebase-admin')
const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')

// Firebase
admin.initializeApp({
  credential: admin.credential.cert(path.join(__dirname, 'firebase-serviceAccountKey.json')),
  databaseURL: 'https://glovo-sercret-santa.firebaseio.com'
})
const db = admin.database()


exports.sendMails = (req, res) => {
  const mailPairs = req.body
  const template = getTemplate()

  _.each(mailPairs, function (pair) {
    const templateData = {'friendName': pair.to.name}
    const data = {
      from: 'Glovo Amigo Invisible <hello@glovoapp.com>',
      to: pair.from['email'],
      subject: '¡' + pair.from.name + ', éste es tu amigo invisible!',
      text: 'Testing some Mailgun awesomness!',
      html: template(templateData)
			// html:'<h1> Surprise Motherfucker </h1> I am watching you <3. BTW, you have to give a present' +
			// 'to '+ pair.to['name']+'. <br> Love,<br> Secret santa'
    }

		// mails.append(data);
    mailgun.messages().send(data, function (error, body) {
      if (error) return
      saveEmail(pair.from, pair.to)
    })
  })

  res.json('Everything great')

  function saveEmail (user, friend) {
    db.ref('santas/' + new Date().getTime()).set({
      name: user['name'],
      friend_name: friend['name'],
      email: user['email'],
      city: user['city']
    })
  }

  function getTemplate() {
    const filePath = path.join(__dirname, '../static/templates/email.html')
    const source = fs.readFileSync(filePath, 'utf-8')
    const template = handlebars.compile(source)

    return template
  }
}

exports.santa = (req, res) => {
  res.render('index.html')
  // res.sendFile(path.join(__dirname, '../dist/index.html'))
}
