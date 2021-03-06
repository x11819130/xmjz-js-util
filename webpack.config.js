const path = require('path')
module.exports = {
    // 模式 none,developlent,production
    mode: 'none',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 打包文件夹
        path: path.resolve(__dirname, 'dist'),
        // 打包文件
        filename: 'xmjz-util.js',
        // 向外暴露的对象的名称
        library: 'xutil',
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入 可选:var,this,commonjs,commonjs2,amd,umd
        libraryTarget: 'umd',
    }
}