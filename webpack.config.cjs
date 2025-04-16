const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'developmwnt',
    target: 'web',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        Clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 4444
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
};