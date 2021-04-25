const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif|mov|pdf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        // https://github.com/ReactTraining/react-router/issues/6201#issuecomment-403291934
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        historyApiFallback: true,
        port: 6700,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "favicon.png",
            template: "index.html"
        })
    ]
};