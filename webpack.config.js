const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_MOCK_SERVER = true;

const devServer = require('./webpack-settings/webpack.devServer')({
	IS_MOCK_SERVER
});

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	devServer,

	entry: {
		main: './src/index.js'
	},

	output: {
		path: path.resolve('./public/built'),
		filename: '[name].js',
		chunkFilename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							outFile: path.resolve(`./public/css/`),
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							outFile: path.resolve(`./public/css/`),
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							outFile: path.resolve('./public/css'),
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/views/index.html',
			title: 'Zrifty',
			minify: true,
			hash: true,
			cache: true,
			xhtml: true
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /node_modules\/(.*)\.(js)$/,
					chunks: 'all',
					name: 'vendor',
					enforce: true
				}
			}
		}
	},
	resolve: {
		modules: [
			path.resolve('./src/'),
			'node_modules'
		],
		extensions: ['.js', '.jsx', '.scss', '.css']
	}
}