const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
    console.log(env)
    const isProd = !!env.production;
    const isDev = !!env.development;
    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    }
    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
        ]
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash].css'
            }))
        }
        return plugins;
    }
    return {
        mode: isProd ? 'production' : isDev && 'development',

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
                    use: getStyleLoaders()
                },
                {
                    test: /\.s[ca]ss$/,
                    use: [...getStyleLoaders(), 'sass-loader']
                }
            ]
        },

        plugins: getPlugins(),
        devServer: {
            inline: false,
            open: true
        },
        target: "web",
        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined
        }
    }
};