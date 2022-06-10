const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = () => {
    return {
        entry: './src/app.js',
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
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'},
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
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