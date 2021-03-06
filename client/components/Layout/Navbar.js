import React from 'react';
import { Link, browserHistory, IndexLink } from 'react-router';
import '../../sass/navbar.scss';

import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

import Modal from '../Modal';
import auth from '../../auth';

class AppNavbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showLoginModal: false,
			showSignupModal: false			
		};
		this.openLoginModal = this.openLoginModal.bind(this)
		this.openSignupModal = this.openSignupModal.bind(this)
		this.closeLoginModal = this.closeLoginModal.bind(this)
		this.closeSignupModal = this.closeSignupModal.bind(this);	
	}
	openLoginModal() {
		this.setState({ showLoginModal: true })
	}
	closeLoginModal() {
		this.setState({ showLoginModal: false })
	}
	openSignupModal() {
		this.setState({ showSignupModal: true })
	}
	closeSignupModal() {
		this.setState({ showSignupModal: false })
	}
	logout() {
		// remove the auth token from local storage
		auth.deauthenticateUser()
		browserHistory.push('/')					
	}
	gotoArtists() {
		browserHistory.push('/artists')		
	}
	gotoMyTracks() {
		let myProfileURL = '/artists/' + auth.getToken()		
		browserHistory.push(myProfileURL)		
	}
	render() {
		let signupTitle = "Sign up"
		let loginTitle = "Login"

		return (
			<div>
			  <Navbar className='navbar'>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <IndexLink to='/'>Song Stash</IndexLink>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
					<NavItem eventKey={1} onClick={this.gotoArtists}>Artists</NavItem>
			        {
			        	this.props.isUserLoggedIn ? 
			        	(
			        	<NavItem eventKey={1} onClick={this.gotoMyTracks}>MyTracks</NavItem>		        	
			        	) 
			        	: null
			    	}
			      </Nav>
			      {this.props.isUserLoggedIn ? (		      
			      	<Nav pullRight>
				      <NavItem eventKey={3} onClick={this.logout}>Logout</NavItem>
			        </Nav>
			      ) : (
			      	<Nav pullRight>
						<NavItem eventKey={1} onClick={this.openLoginModal}>Login</NavItem>
				        <NavItem eventKey={2} onClick={this.openSignupModal}>Signup</NavItem>
			      	</Nav>				        
			      )}
			    </Navbar.Collapse>
			  </Navbar>

			  <Modal className="login-modal" show={this.state.showLoginModal} close={this.closeLoginModal} title="Login">
	            <form action="/auth/local-login" method="post">
	              <input type="text" name="username" placeholder="Username" />
	              <br/>
	              <input type="password" name="password" placeholder="Password" />
	              <br/>
				  <input type="submit" value="Login" className="modal-submit" />
	            </form>
              </Modal>

			  <Modal className="signup-modal" show={this.state.showSignupModal} close={this.closeSignupModal} title="Signup" >
		          <form action="/auth/local-signup" method="post">
		            <input type="text" name="username" placeholder="Username" maxLength="20" />
		            <br/>
		            <input type="password" name="password" placeholder="Password" />
		            <br/>
		            <input type="submit" value="Signup" className="modal-submit" />
		          </form>
              </Modal>

		  </div>
		)
	}
}

export default AppNavbar