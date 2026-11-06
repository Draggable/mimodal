const pkg = require('./package.json');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinimizerPlugin = require('minimizer-webpack-plugin');
const webpack = require('webpack');

const bannerTemplate = [
  `${pkg.name} - ${pkg.homepage}`,
  `Version: ${pkg.version}`,
  `Author: ${pkg.author}`
].join('\n');

module.exports = {
  mode: 'production',
  target: ['web', 'es5'],
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
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'sass-loader',
          options: {
            api: 'modern',
            sourceMap: true,
            sassOptions: {
              loadPaths: [path.resolve(__dirname, './src/sass')],
              style: 'compressed',
              silenceDeprecations: ['color-functions', 'global-builtin']
            }
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            postcssOptions: {
              plugins: [
                autoprefixer({ overrideBrowserslist: ['last 2 versions'] })
              ]
            }
          }
        }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(__dirname, 'public/js/mimodal.js'),
        path.join(__dirname, 'public/css/mimodal.css')
      ]
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.BannerPlugin(bannerTemplate)
  ],
  optimization: {
    minimizer: [
      new MinimizerPlugin({
        extractComments: false,
        minimizerOptions: {
          compress: { passes: 2 }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['src', 'node_modules']
  },
  devServer: {
    host: '127.0.0.1',
    hot: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    client: {
      progress: true,
      logging: 'none'
    },
    devMiddleware: {
      stats: 'errors-only'
    }
  }
};
