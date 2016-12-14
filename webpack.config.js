var webpack = require('webpack');

var entrySources = process.env.NODE_ENV !== "production" ?
  [
    "./src/index.js",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ] :
  [
    "./src/index.js"
  ];

module.exports = {
  entry: {
    index: entrySources
  },
  output: {
    publicPath: "http://localhost:8080/",
    filename: "public/bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.monk$/, loader: 'monkberry-loader'
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};
