const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'projects.html',
          template: './src/components/projects/projects.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'skills.html',
          template: './src/components/skills/skills.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'experience.html',
          template: './src/components/experience/experience.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'git.html',
          template: './src/components/git/git.html',
        })
    ],
    module: {
        rules: [
          {
            test: /\.html$/,
            use: [ 'html-loader' ]
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [ 'file-loader' ]
          }
        ]
      },
    devServer: {
        port: 5000
    }
}