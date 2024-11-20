const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		port: 3001,
		client: {
			overlay: false
		}
	}
}
