const common = require("./webpack.common.cjs")
const { Configuration } = require("webpack")
/**
 * @type Configuration
 */
const config = {
  ...common,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
}

module.exports = config
