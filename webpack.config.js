const path = require('path');

module.exports = {
	target: 'web',
	entry: {
		app: './src/index.js', //app -> [name]
		styles: './src/styles/main.scss'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js',
	},
	devServer: {
		// host: '0.0.0.0',
		publicPath: '/dist',
		port: 9001,
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: {
			index: 'index.html'
		},
		watchContentBase: true,
		compress: true,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
};
