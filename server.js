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

var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');

var authRoutes = require('./server/routes/auth');
var indexRoutes = require('./server/routes/index');
var apiRoutes = require('./server/routes/api');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session');

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

// TODO: update for production
mongoose.connect('mongodb://localhost/song-store');

app.use(express.static(publicPath));

app.use(cookieParser('music'));
app.use(bodyParser());
app.use(session({ secret: 'music' }));
app.use(passport.initialize());
app.use(passport.session());

// authorize api requests
// var authCheckMiddleware = require('./server/auth-check')(config);
// app.use('/api', authCheckMiddleware);

// routing
// var apiRoutes = require('./server/routes/api');
app.use('/', indexRoutes);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// By default send index.html
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(port, function() {
	console.log('Song Store listening on port ' + port);
});
