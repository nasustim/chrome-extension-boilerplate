const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  static: path.resolve(__dirname, 'static'),
}

module.exports = {
  entry: './src/index.ts',
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.css']
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(paths.static, '/manifest.json'),
          to: paths.dist,
        }
      ],
    })
  ],
}