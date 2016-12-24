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
	render() {
		let signupTitle = "Sign up"
		let loginTitle = "Login"
		return (
			<div>
			  <Navbar className='navbar'>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <IndexLink to='/'>Song Store</IndexLink>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={2} href="/artists">Artists</NavItem>
			        {
			        	this.props.isUserLoggedIn ? 
			        	(
			        	<NavDropdown eventKey={3} title="My Profile" id="basic-nav-dropdown">
				          <MenuItem eventKey={3.1}>Action</MenuItem>
				          <MenuItem eventKey={3.2}>Another action</MenuItem>
				          <MenuItem eventKey={3.3}>Something else here</MenuItem>
				          <MenuItem divider />
				          <MenuItem eventKey={3.3}>Separated link</MenuItem>
				        </NavDropdown>			        	
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

			  <Modal className="login-modal" show={this.state.showLoginModal} close={this.closeLoginModal} title={loginTitle}>
	            <form action="/auth/local-login" method="post">
	              E-mail address:<br/>
	              <input type="text" name="username" />
	              <br/>
	              Password:<br/>
	              <input type="text" name="password" />
	            </form>
              </Modal>

			  <Modal className="signup-modal" show={this.state.showSignupModal} close={this.closeSignupModal} title={signupTitle}>
		          <a href='/auth/soundcloud'><input type="image" src="http://connect.soundcloud.com/2/btn-connect-sc-s.png" /></a>
		          <hr/>
		          <h4>Sign up with your e-mail</h4>
		          <form action="/auth/local-signup" method="post">
		            User name:<br/>
		            <input type="text" name="username" />
		            <br/>
		            Password:<br/>
		            <input type="password" name="password" />
		            <br />
		            <input type="submit" value="Sign Up" />
		          </form>
              </Modal>

		  </div>
		)
	}
}

export default AppNavbar