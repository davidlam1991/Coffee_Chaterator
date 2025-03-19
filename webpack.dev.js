const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true, 
    port: 3000,
    open: true,
    watchFiles: ["src/**/*.css"],
  },
});
