var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: "./doc/src/index.js",
  output: {
    filename: "dev-index-bundle.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
        },
      }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8999,
    //module: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "doc.html",
      template: "./doc/src/index.html"
    })
  ]
};
