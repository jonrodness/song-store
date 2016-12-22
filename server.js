var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');

var app = express();
var publicPath = path.resolve(__dirname, 'static');
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

if (!isProduction) {
	// do not use hot middleware during production
	var compiler = webpack(webpackConfig);
	var middleware = webpackDevMiddleWare(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		watchOptions: {
		    aggregateTimeout: 300,
		    poll: 1000
		},		
		stats: {
			colors: true
		}
	});

	app.use(middleware);
	app.use(webpackHotMiddleWare(compiler, {
		log: console.log, 
		path: '/__webpack_hmr', 
		heartbeat: 10 * 1000
	}));
}

app.use(express.static(publicPath));

app.listen(port, function() {
	console.log('Mutu listening on port ' + port);
});
