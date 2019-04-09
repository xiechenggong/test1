const { VueLoaderPlugin } = require('vue-loader')
const path=require('path');
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module:{
    rules:[
        {test:/\.css$/,use:['style-loader','css-loader']
            },
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
        {test:/\.vue$/,use:'vue-loader'},
        {test:/\.(png|gif|jpg|svg|ttf)$/, use:['file-loader']}

    ]
    },

    resolve:{
        alias:{
            // vue$: "vue/dist/vue.js"

        }
    },

};
