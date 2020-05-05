var webpack = require("webpack");
var path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "");
var APP_DIR = path.resolve(__dirname, "src");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: APP_DIR + "/app.js",
  output: {
    path: BUILD_DIR,
    // why the hell not working!!!
    // because gh-pages -d dist
    // and dist is in .gitignore
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style-loader!css-loader' // Run both loaders
      },
      {
        test: /\.less$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ] 
        
      }
    ]
  },
  devServer: {
    proxy: {
      hot: true,
      port: 3002, // this is your local port!!!
        '/**': {
          target: "https://ai.rmbot.cn",
          secure: false,
          changeOrigin: true,
          logLevel: "info"
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      // favicon: 'theme/img/favicon.ico',
      inject: true,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};

module.exports = config;
