const { Configuration } = require("webpack")
const path = require("path")
const ReactSSRWebpackPlugin = require("../src/react-ssr-html-webpack-plugin.cjs")
const HtmlWebpackPlugin = require("html-webpack-plugin")
/**
 * @type Configuration
 */
const common = {
  entry: {
    app: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    filename: "[name]-[contenthash:8].bundle.js", // contenthash:8最常用，用于避免缓存问题
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react ssr",

      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /(\.module)?\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ["babel-loader"],
      },
    ],
  },
}

module.exports = common
