const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",

    module: {
        // Loader images
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|ico|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }   
                ]
            },
            //Loader fonts
            {
                test: /\.(ttf|otf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }   
                ]
            },
            //css-loader
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ca]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash].css'
        })
    ],
    target: "web"
};