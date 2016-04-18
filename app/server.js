var fs = require('fs')
var path = require('path')
var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('../webpack.config')

const port = process.env.PORT || 3001
const app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  stats: {
    colors: true
  }
}));

// serve static assets normally
app.use(express.static(__dirname))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

app.listen(port, function () {
  console.log('Server listening on http://localhost:'+ port +', Ctrl+C to stop')
})
