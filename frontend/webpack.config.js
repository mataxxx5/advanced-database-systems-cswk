const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  devServer: {
    host: '0.0.0.0',
    contentBase: `${__dirname}\\dist`,
    hot: true,
    port: 9000,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.s[c]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.css$/, 
        use: 'css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
