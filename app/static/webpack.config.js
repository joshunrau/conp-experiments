const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { merge } = require('webpack-merge');

const baseConfig = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.join(__dirname,  "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          "style-loader", // Creates `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Experiments Portal'
    }),
  ]
}

const developmentConfig = merge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/experiments': 'http://localhost:5000',
    },
  },
  optimization: {
    runtimeChunk: 'single',
  },
})

const productionConfig = baseConfig;

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return developmentConfig
  } else if (argv.mode === 'production') {
    return productionConfig
  }
};