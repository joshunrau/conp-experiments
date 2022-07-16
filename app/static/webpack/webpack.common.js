const path = require("path");

const rootDir = (path.resolve(__dirname, ".."));

module.exports = {
  entry: path.join(rootDir, "src", "index.js"),
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.join(rootDir,  "dist")
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
  }
}