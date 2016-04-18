module.exports = {
  entry: {
    app: ['./app/App.js',]
  },
  output: {
    path: __dirname + './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

// var fs = require('fs')
// var path = require('path')
// var webpack = require('webpack')
//
// module.exports = {
//
//   // devtool: 'inline-source-map',
//
//   entry: {
//     app: ['./app/App.js']
//   },
//
//   output: {
//     path: __dirname + './public',
//     filename: 'bundle.js'
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// }
