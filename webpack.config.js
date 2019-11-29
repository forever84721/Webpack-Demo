const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @typedef {import("webpack/index").Configuration webpackTypes}
 */
/**
 * @type {webpackTypes}
 */
module.exports = {
  mode: "development",
  // devtool: "inline-source-map",
  // entry: "./src/index.js",
  devServer: {
    // contentBase: "./dist"
  },
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
    another: "./src/another-module.js",
    appts: "./src/index.ts",
    scsstest: "./src/a.scss"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "public/index123.html"
      // chunks: []
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash:8].css"
    })
  ],
  output: {
    // filename: "bundle.js",
    filename: "[name].[contenthash:8].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  //minicss
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          { loader: "postcss-loader" }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          { loader: "postcss-loader" },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "myvendors",
          chunks: "all"
        }
      }
    }
  }
};
