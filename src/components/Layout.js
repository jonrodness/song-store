import React from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

class Layout extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<div className='content'>
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}

export default Layout;