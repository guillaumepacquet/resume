const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
                {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  exclude: /node_modules/
                },
                {
                  test: /\.vue$/,
                  loader: 'vue-loader',
                  exclude: /node_modules/
                }
            ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};
