const HtmlWebpackPlugin = require("html-webpack-plugin")
const { Options } = require("html-webpack-plugin")
// import { renderToString } from "react-dom/server"
const { Compiler } = require("webpack")
const pluginName = "react-ssr-html-webpack-plugin"
class ReactSSRHtmlWebpackPlugin {
  // /**
  //  *
  //  * @param {Options} options
  //  */
  // constructor(options) {
  //   return new HtmlWebpackPlugin(options)
  // }
  /**
   *
   * @param {Compiler} compiler
   */
  apply(compiler) {
    const plugin = new HtmlWebpackPlugin()
    plugin.apply(compiler)
    console.log("apply")

    // compiler.hooks.compilation.tap(pluginName, (compilation) => {
    //   console.log("compilation")
    //   HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
    //     pluginName,
    //     (template, callback) => {
    //       console.log("hello")
    //       console.log(template.bodyTags)
    //       callback(null, template)
    //     }
    //   )

    //   HtmlWebpackPlugin.getHooks(compilation).afterEmit.tapAsync(
    //     pluginName,
    //     (template, callback) => {
    //       console.log("hello")
    //       console.log(template.bodyTags)
    //       callback(null, template)
    //     }
    //   )
    // })
  }
}

module.exports = ReactSSRHtmlWebpackPlugin
