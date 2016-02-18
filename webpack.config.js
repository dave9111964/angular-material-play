/**
 * Created by david on 6/5/15.
 */
var webpack = require('webpack');

var config = {
    context:  __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};


if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module.exports = config;


