import path from 'path';

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    noInfo: true,
    open: true
  },
  entry: [
    path.resolve(__dirname, 'src/index')    
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'    
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, 
      { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
    ]
  },
}
