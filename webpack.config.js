var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

var config = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		path.join(__dirname, 'client/components/App.js')
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'react-hmre']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}		
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;