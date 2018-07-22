

const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
// console.log(path.join(__dirname,"../","dist"));

const htmlWebpackPlugin = require("html-webpack-plugin");
const conf = {
    entry:{
        main:"./01Vue/src/main.js"
    },
    output:{
        filename:"build.js",
        path:path.join(__dirname,"/01Vue/dist")
    },
    mode: 'development',
    module:{
        rules:[{
            test:/\.vue$/,
            use:"vue-loader"
        }]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"01Vue/src/index.html")
        }),
        new VueLoaderPlugin()
    ]
};

module.exports = conf;