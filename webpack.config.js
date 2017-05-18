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
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    `file?hash=sha512&digest=hex&name=./images/[name]${hash_fingerprint}.[ext]`,
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: require.resolve('snapsvg'),
                loader: 'imports-loader?this=>window,fix=>module.exports=0'
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
};

module.exports = config;
