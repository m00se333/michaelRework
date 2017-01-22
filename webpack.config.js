var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/main.js"),
  output: {
      path: "_build",
      filename: "bundle.js"
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src/"),
        loader: "babel"
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "src/stylesheets"),
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}