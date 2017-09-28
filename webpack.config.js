const path = require('path');
var webpack = require('webpack');

const LIBRARY_NAME = 'react-pivot'

module.exports = {
    entry: {
        'index': path.resolve('src', 'index.jsx'),
    },
    output: {
        pathinfo: true,
        path: path.join(__dirname),
        filename: '[name].js',
        library: LIBRARY_NAME,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.css$/,  loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
        }),
    ],
};
