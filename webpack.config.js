module.exports = {
  renderer: {
    entry: './src/renderer/javascripts/index.js',
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/,
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", 'sass-loader'],
        }
      ]
    }
  },
  preload: {
    entry: './src/preload/index.js'
  },
  main: {
    entry: './src/main/index.js'
  }
}
