const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'www');
const APP_DIR = path.resolve(__dirname, 'src');

const extractCSS = new ExtractTextPlugin('styles.css');

const config = {
    entry: `${APP_DIR}/index.jsx`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel',
                query:
                    {
                        presets:['react', 'es2015', 'stage-0']
                    }
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract(['css?minimize&modules&importLoaders=2&localIdentName=[name]__[local]', 'postcss', 'sass']),
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false,
        }),
        extractCSS,
    ],
    devtool: 'eval',
};

module.exports = config;