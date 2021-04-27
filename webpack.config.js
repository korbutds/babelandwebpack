module.exports = {
    mode: "development",

    module: {
        // Loader images
        rules: [
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
            }
        ]
    }
};