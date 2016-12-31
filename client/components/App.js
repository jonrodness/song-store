import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Player from './Player'
import ArtistPage from '../containers/ArtistPage'
import ArtistsPage from '../containers/ArtistsPage'
import Layout from './Layout'
import Home from './Home'
import OAuth from './OAuth'
import auth from '../auth'

import '../sass/app.scss'

import app from '../reducers'

// promise polyfill for whole app
import 'es6-promise'

var NoMatch = React.createClass({
	render: function() {
		return (
			<h2>404 Not Found</h2>
		);
	}
});

const root = document.getElementById('root')
const store = createStore(app)

function requireAuth(nextState, replace) {
	if (!Auth.isUserLoggedIn()) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		})
	}
}

function confirmAuth(nextState, replace) {
	let params = this.props.location.query;
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='oauthcallback/:result' component={OAuth} />
				<Route path='player' component={Player} />
				<Route path='artists/:id' component={ArtistPage} />
				<Route path='artists' component={ArtistsPage} />
			</Route>
			<Route path='*' component={NoMatch} />
		</Router>
	</Provider>,
	root
);