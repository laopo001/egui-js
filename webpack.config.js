const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: './ts/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash:8].js',
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // new WasmPackPlugin({
        //     crateDirectory: path.resolve(__dirname, "."),
        //     outName: "egui_js",
        // }),
        // Have this example work in Edge which doesn't ship `TextEncoder` or
        // `TextDecoder` at this time.
        new webpack.ProvidePlugin({
            TextDecoder: ['text-encoding', 'TextDecoder'],
            TextEncoder: ['text-encoding', 'TextEncoder']
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.wasm', '.ts', '.tsx', '.json'],
    },
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
    }
};
