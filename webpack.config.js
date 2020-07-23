const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

function filename(ext){
    if(isDev){
        `[name].${ext}`
    } else{
        `[name].[hash].${ext}`}
}

const cssLoaders = preprocVar => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: isDev, reloadAll: true },
        },
        'css-loader'
    ]
    if(preprocVar) { loaders.push(preprocVar) }
    return loaders
}


module.exports = {
    mode: 'development',
    devtool : isDev ? 'source-map' : '',
    context : path.join(__dirname, 'src'),
    entry: './start.js',
    output : {
        path : path.resolve(__dirname, 'public')
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.css$/,
                use: cssLoaders()
            },{
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img',
                }
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template: '../views/index.html',
            filename: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({}, {
            filename: filename('css')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from : path.resolve(__dirname, 'src/img'),
                    to   : path.resolve(__dirname, 'public/img')
                },
                {
                    from : path.resolve(__dirname, 'views'),
                    to   : path.resolve(__dirname, 'public')
                }
            ]
        })
    ]
}