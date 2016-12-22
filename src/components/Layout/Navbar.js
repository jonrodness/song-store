import React from 'react';
import '../../sass/navbar.scss';

import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

import Modal from '../Modal';

class AppNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLoginModal: false,
			showSignupModal: false			
		};
		this.openLoginModal = this.openLoginModal.bind(this);
		this.openSignupModal = this.openSignupModal.bind(this);
		this.closeLoginModal = this.closeLoginModal.bind(this);
		this.closeSignupModal = this.closeSignupModal.bind(this);		
	}
	openLoginModal() {
		this.setState({showLoginModal: true});
	}
	closeLoginModal() {
		this.setState({showLoginModal: false});
	}
	openSignupModal() {
		this.setState({showSignupModal: true});
	}
	closeSignupModal() {
		this.setState({showSignupModal: false});
	}
	render() {
		let signupTitle = "Sign up with your email";
		let loginTitle = "Login with your email";
		return (
			<div>
			  <Navbar className='navbar'>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Mutu</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="#">Player</NavItem>		      
			        <NavDropdown eventKey={3} title="Plays" id="basic-nav-dropdown">
			          <MenuItem eventKey={3.1}>Action</MenuItem>
			          <MenuItem eventKey={3.2}>Another action</MenuItem>
			          <MenuItem eventKey={3.3}>Something else here</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={3.3}>Separated link</MenuItem>
			        </NavDropdown>
			      </Nav>
			      <Nav pullRight>
			        <NavItem eventKey={1} onClick={this.openLoginModal}>Login</NavItem>
			        <NavItem eventKey={2} onClick={this.openSignupModal}>Signup</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			  <Modal className="login-modal" show={this.state.showLoginModal} close={this.closeLoginModal} title={loginTitle}>
	            <form>
	              E-mail address:<br/>
	              <input type="text" name="email" />
	              <br/>
	              Password:<br/>
	              <input type="text" name="password" />
	            </form>
              </Modal>
			  <Modal className="signup-modal" show={this.state.showSignupModal} close={this.closeSignupModal} title={signupTitle}>
		          <form>
		            User name:<br/>
		            <input type="text" name="username" />
		            <br/>
		            E-mail address:<br/>
		            <input type="text" name="email" />
		            <br/>
		            Password:<br/>
		            <input type="text" name="password" />
		          </form>
              </Modal>              
		  </div>
		)
	}
}

export default AppNavbar;