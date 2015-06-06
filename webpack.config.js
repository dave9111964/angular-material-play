/**
 * Created by david on 6/5/15.
 */

module.exports = {
    context:  __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
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


