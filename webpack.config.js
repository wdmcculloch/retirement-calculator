const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/client/dist"),
  },
  module: {
    rules: [
      {
        test: [/.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};
