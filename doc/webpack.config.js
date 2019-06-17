var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "index-bundle.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    //module: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "doc.html",
      template: "./src/index.html"
    })
  ]
};
