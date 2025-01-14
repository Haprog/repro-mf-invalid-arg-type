const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const path = require('path');

/**
 * @typedef {import('webpack').Configuration} WebpackConfiguration
 */

/** @type {() => WebpackConfiguration} */
module.exports = (env) => {
  const isProd = env.production === true;
  const isDevelopment = !isProd;

  console.log(`Mode: ${isProd ? `PRODUCTION` : 'DEVELOPMENT'}\n`);

  return {
    entry: './src/index',
    mode: isProd ? 'production' : 'development',
    ...(isDevelopment
      ? {
          devServer: {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
              'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            },
            static: path.join(__dirname, 'dist'),
            port: 3002,
          },
        }
      : {}),
    output: {
      publicPath: 'auto',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'repro',
        filename: 'remoteEntry.js',
        dev: isDevelopment,
        exposes: {
          './Button': './src/Button',
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
