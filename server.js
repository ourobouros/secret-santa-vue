/**
 * Created by glovoadrian on 10/01/2017.
 */
var config = require('./config')
var path = require('path')
var opn = require('opn')
var express = require('express')
var cons = require('consolidate')
var controller = require('./controllers/secret-santa-controller');
// default port where dev server listens for incoming traffic
var port = process.env.PORT || 8080
var app = express()
app.set('views', path.join(__dirname, 'dist'));

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./dist/static'))

app.use('/', controller.santa)

var uri = 'http://localhost:' + port

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err)
		return
	}

	// when env is testing, don't need open it
	if (process.env.NODE_ENV !== 'testing') {
		opn(uri)
	}
})
