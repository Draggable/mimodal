import pkg from './package.json';
import path from 'path';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { optimize, BannerPlugin } from 'webpack';

const sassLoaders = [
  'css?sourceMap',
  'sass?sourceMap',
  'postcss-loader?pack=cleaner'
];

const bannerTemplate = [
  `${pkg.name} - ${pkg.homepage}`,
  `Version: ${pkg.version}`,
  `Author: ${pkg.author}`
].join('\n');

module.exports = {
  entry: {
    mimodal: './src/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js'
  },
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loaders: ['eslint'],
      include: 'src/js/'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
    }]
  },
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist', 'public/js/mimodal.js', 'public/css/mimodal.css']),
    new ExtractTextPlugin('[name].css'),
    new optimize.DedupePlugin(),
    new BannerPlugin(bannerTemplate),
    new optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/sass')]
  },
  postcss: function() {
    return {
      defaults: [autoprefixer],
      cleaner: [autoprefixer({ browsers: ['last 2 versions'] })]
    };
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  },
  devServer: {
    hot: true,
    contentBase: 'public/',
    progress: true,
    colors: true,
    noInfo: true
  }
};
