const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',

  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({

     //title: 'Output Management',

     title: 'Caching',
    }),
  ],
  output: {

   filename: 'bundle.js',

   filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization:{
    runtimeChunk: 'single',
    moduleIds: 'deterministic',   
    
    splitChunks: {

      cacheGroups: {

        vendor: {

          test: /[\\/]node_modules[\\/]/,

          name: 'vendors',

          chunks: 'all',

        },

      },

    },
   },
  
};