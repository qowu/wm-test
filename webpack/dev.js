var path = require('path')
var webpack = require('webpack')

module.exports = {
   // 项目根目录
   context: path.join(__dirname, '../') ,
   // 入口文件 
   entry: [
       './src/main.js'
   ],
   // 打包编译生成文件配置
   output: {
       path: path.join(__dirname, '../dist'),
       filename: 'index.js',
       publicPath: '/dist/', // devServer访问的路径前缀
       chunkFilename: '[name]-[chunkhash:8].js'
   },
   resolve: {
       extensions: ['.js', '.vue'], // 引入文件的默认扩展名
       alias: {
           vue: 'vue/dist/vue.js',
           '@': path.resolve(__dirname, '../src')
       }
   },
   devServer: {
    contentBase: path.join(__dirname, '../'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8080
   },
   devtool: 'source-map',
   module:{ 
       rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: /node_modules/
            }
        ]
   },
   plugins:[
        new webpack.HotModuleReplacementPlugin()
   ]
}