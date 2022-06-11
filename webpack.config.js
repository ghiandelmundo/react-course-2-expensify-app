const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    isProduction = typeof (env.production) !== undefined && env.production === true;
    console.log('isProduction', isProduction);
    return {
        mode: isProduction ? 'production' : 'development',
        entry: 'src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, 
                {
                    test: /\.s?css$/,
                    use: isProduction ? 
                    [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ] : [
                        'style-loader',
                        {   
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, "public"),
            },
            historyApiFallback: true
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    };
};

// loader