module.exports = {
  "mode": "production",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "[name].js",
    "libraryTarget": "umd"
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
    'react': "react"
  }

}
