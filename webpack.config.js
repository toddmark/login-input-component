module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "[name].js"
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
  externals: {
    'react': "React"
  }

}
