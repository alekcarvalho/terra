var path = require('path')
var webpack = require('webpack')
var SplitByPathPlugin = require('webpack-split-by-path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
  test: /\.vue$/,
  use: {
    loader: 'vue-loader',
    options: {
      loaders: {
        sass: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax=1',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, 'src/assets/styles/vars.scss'), 'src/assets/styles/mixins.scss', 'src/assets/styles/base.scss']
            },
          },
        ],
        scss: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, 'src/assets/styles/vars.scss'), 'src/assets/styles/mixins.scss', 'src/assets/styles/base.scss']
            },
          },
        ],
      },
    },
  },
},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  //devtool: '#eval-source-map',
  plugins: [
          new webpack.ProvidePlugin({
             $: 'jquery/dist/jquery.js',
             jQuery: 'jquery/dist/jquery.js'
         }),
         new SplitByPathPlugin([
          {
            name: 'vendor',
            path: path.join(__dirname, 'node_modules')
          }
        ]),
      ]
}

if (process.env.NODE_ENV === 'production') {
  //module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
