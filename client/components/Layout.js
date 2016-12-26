import React from 'react'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Player from './Player'

import auth from '../auth'
import '../sass/layout.scss'

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isUserLoggedIn: auth.isUserLoggedIn()			
		}
		this.updateLoginState = this.updateLoginState.bind(this)		
		auth.onChange = this.updateLoginState
	}

	updateLoginState(loggedIn) {
		this.setState({ isUserLoggedIn:loggedIn })
	}

	render() {
		return(
			<div className='layout'>
				<Navbar isUserLoggedIn={this.state.isUserLoggedIn} />
				<div className='content'>
					{this.props.children}
				</div>
				<Player />
			</div>
		)
	}
}

export default Layout;