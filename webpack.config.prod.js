const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        }
      }
    }
  },
})
