var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var config = module.exports = {
  context: __dirname,

  entry: {
    application: ["./app/javascripts/application.js"],
  },

  output: {
    path: path.join(__dirname, "dist", "2016"),
    filename: "[name].js",
    publicPath: "/2016/",
  },

  resolve: {
    extensions: ["", ".js", ".jsx"],
    moduleDirectories: ["node_modules"],
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url',
      },
      {
        test: /[/]speakers2014[/]/,
        loader: 'file?name=images/speakers2014/[name].[ext]',
      },
      {
        test: /[/]keynote[/]/,
        loader: 'file?name=images/keynote/[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
    ]
  },

  postcss: [
    require('lost'),
    require('precss'),
    autoprefixer({ browsers: ['last 2 versions', '> 1%', 'Firefox > 20'] }),
  ],

  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      title: "啥米零時政府 g0v 2016 summit",
      filename: "index.html",
      template: "app/templates/index.html"
    }),
  ],
};