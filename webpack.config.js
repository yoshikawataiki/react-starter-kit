const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/main.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/app.css"
    })
  ],
  resolve: {
    extensions: [
      ".ts", // for ts-loader
      ".tsx", // for ts-loader
      ".js"
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./images/[name].[ext]",
            outputPath: "./",
            publicPath: path => "." + path
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    port: 8081,
    inline: true,
    host: "0.0.0.0"
  }
};
