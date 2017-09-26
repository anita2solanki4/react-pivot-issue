const path = require('path');

const LIBRARY_NAME = 'react-pivot'

module.exports = {
    entry: {
        'index': path.resolve('src', 'index.jsx'),
    },
    output: {
        path: path.join(__dirname),
        filename: '[name].js',
        library: LIBRARY_NAME,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                loader:"webpack-require-css",
                options:{
                    publicPath:'./src/'
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
