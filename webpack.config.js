
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    public: [
      'webpack-dev-server/client?http://127.0.0.1:3007', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './app/main.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 3007,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        include: [path.join(__dirname, 'app')],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ['react', 'es2015'],
          "plugins": ["react-hot-loader/babel"]
        }
      }
    ]
  }
};