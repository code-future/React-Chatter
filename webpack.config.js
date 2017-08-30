module.exports = {
  devtool: 'inline-source-map',
  entry: __dirname + '/App.jsx',
  output: {
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.(png|gif|jpg|svg)$/,
          use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        use: ['file-loader?limit=100000&name=assets/[name]-[hash].[ext]'] 
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }]
      }
    ]
  }
}