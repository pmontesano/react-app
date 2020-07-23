const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const css = {
  test: /\.scss$/,
  loader: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
};

// webpack.config.js
const serverConfig = {
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    index: path.resolve(__dirname, "./app/server/index.js"),
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [js, css],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

// webpack.config.js
const clientConfig = {
  mode: "development",
  target: "web",
  entry: {
    home: path.resolve(__dirname, "./app/client/entries/home/index.js"),
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [js, css],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};

module.exports = [serverConfig, clientConfig];
