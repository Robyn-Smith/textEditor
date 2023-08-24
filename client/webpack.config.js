const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Added a configure workbox plugins for a service worker and manifest file.
// Added CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',// Set the mode to development
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },// Define entry points of application
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    }, // Define the output directory and filenames for bundled files
    plugins: [
      // HTML template generation
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      // Extract CSS into separate files
      new MiniCssExtractPlugin(),

      // Inject the service worker into the application
      new InjectManifest({
        swSrc: './src-sw.js', // Path to the service worker source
        swDest: 'src-sw.js', // Destination filename for the injected service worker
      }),

      // Generate a Web App Manifest
      new WebpackPwaManifest({
        // Web App Manifest configuration
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Allowing users to edit text',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ]
      }),
    ],

    module: {
      rules: [
        // CSS loader configuration
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        // Asset loader for images
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/icons/[name].[ext]'  
          }// Define the output path and filename for images
        },
        // Babel configuration for JavaScript files
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },

      ],
    },
  };
};