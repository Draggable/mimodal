import pkg from './package.json';
import path from 'path';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';

const bannerTemplate = [
  `${pkg.name} - ${pkg.homepage}`,
  `Version: ${pkg.version}`,
  `Author: ${pkg.author}`
].join('\n');

module.exports = {
  mode: 'production',
  entry: {
    mimodal: './src/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [path.resolve(__dirname, './src/sass')],
            outputStyle: 'compressed'
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [autoprefixer({ browsers: ['last 2 versions'] })]
          }
        }]
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'public/js/mimodal.js', 'public/css/mimodal.css']),
    new ExtractTextPlugin('[name].css'),
    new webpack.BannerPlugin(bannerTemplate)
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['src', 'node_modules']
  },
  devServer: {
    hot: true,
    contentBase: 'public/',
    progress: true,
    noInfo: true
  }
};
