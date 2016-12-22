import React from 'react';
import '../../sass/main.scss';

import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

import LoginModal from '../LoginModal';

var MainNavbar = React.createClass({
	getInitialState: function() {
		return {showModal: false};
	},
	openModal: function() {
		this.setState({showModal: true});
	},
	closeModal: function() {
		this.setState({showModal: false});
	},
	render() {
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
			        <NavItem eventKey={1} onClick={this.openModal}>Login</NavItem>
			        <NavItem eventKey={2} href="#">Signup</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			  <LoginModal show={this.state.showModal} close={this.closeModal}/>
		  </div>
		)
	}
});

export default MainNavbar;