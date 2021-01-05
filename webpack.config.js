const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        'main': './js/index.js',
    },
    module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.css$/i,
            use: ['css-loader']
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.png$/,
            use: 'file-loader'
        },
        {
            test: /\.jpg$/,
            use: 'file-loader'
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.glsl$/,
            use: 'raw-loader'
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }
    ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.glsl' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        compress: true,
        port: 8000,
        hot: true,
        inline: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['main'],
            filename: 'index.html',
        })
    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 100
    }
};