let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let VueLoader = require("vue-loader/lib/plugin")

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.vue$/, use: [
        { loader: 'vue-loader', options: { hotReload: false }}
      ]},
      { test: /\.css$/, use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', options: { sourceMap: true }}
      ]}
    ]
  },
  output: { 
    filename: "bundle.js",
    path: require('path').resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'bundle.css'}),
    new VueLoader()
  ]
}
