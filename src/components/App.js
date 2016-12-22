import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import Player from './Player';
import Layout from './Layout';
import Home from './Home';

var NoMatch = React.createClass({
	render: function() {
		return (
			<h2>404 Not Found</h2>
		);
	}
});

const root = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path='player' component={Player} />
		</Route>
		<Route path='*' component={NoMatch} />
	</Router>,
	root
);