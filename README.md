# Secret Santa by Glovo

![Secret Santa](https://github.com/Glovo/secret-santa-vue/blob/master/src/assets/images/amigo-invisible.png)

A [Secret Santa](https://en.wikipedia.org/wiki/Secret_Santa) application done in [Vue.js](https://vuejs.org/).


## Features

### Things that you can do

With Secret Santa by Glovo (SSbG) you will be able to enter your friends emails and obtain a shuffled output of those.

Each one of them will receive an email with their designated secret friend, and some gift ideas by Glovo or
use your **own email template**.

### Mailgun integration

SSbG uses **Mailgun** as a mail service provider. You will only need to add the API key inside the controller. More information about 
mailgun API can be found in the [documentation](https://documentation.mailgun.com/api_reference.html#api-reference).

### Firebase integration

SSbG also uses **Firebase** to save the data of the emails sent (the pairs of people and their emails). Feel free to use it also, just provide your firebase server
configuration inside the _firebase-serviceAccountKey_ file.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
