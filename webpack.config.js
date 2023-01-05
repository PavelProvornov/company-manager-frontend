const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"), 
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    'static': {
      directory: './dist'
    },
    historyApiFallback: true,
    port: 8080
  },
};