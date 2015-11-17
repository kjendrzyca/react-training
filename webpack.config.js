var webpack = require('webpack'),
    path    = require('path');

module.exports = {
    entry: [
        './app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: [/\.jsx$/, /\.js$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: [/\.woff$/, /\.woff2$/, /\.ttf$/, /\.eot$/, /\.svg$/],
                loader: 'url?limit=100000'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};