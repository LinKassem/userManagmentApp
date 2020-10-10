const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'dist.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env',
							{
								targets: {
									esmodules: true
								}
							}
						],
						'@babel/preset-react'
					],
					plugins: ['babel-plugin-emotion']
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: require.resolve('url-loader'),
				options: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]'
				}
			},
			{
				test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
				loader: require.resolve('file-loader'),
				options: {
					name: 'static/media/[name].[hash:8].[ext]'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	]
}
