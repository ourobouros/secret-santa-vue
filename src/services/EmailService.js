import Vue from 'vue'
var email = {}

email.sendEmails = (pairs) => {
  var mails = []
  pairs.forEach((guy) => {
    var pair = {
      from: {
        name: guy.name,
        email: guy.email
      },
      to: {
        name: guy.designatedFriend.name,
        email: guy.designatedFriend.email
      }
    }

    mails.push(pair)
  })

  var data = JSON.stringify(mails)
  return new Promise((resolve, reject) => {
    Vue.http.post('/enviar', data)
		.then((result) => {
          if (result && result.status == 200) {
            resolve(result.data)
          } else {
            reject(result)
          }
        }, (error) => {
          console.log('My response is, ', error)
          reject(error)
        })
  })
}

export default email
