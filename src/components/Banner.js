import React from 'react';
import '../sass/banner.scss';

class Banner extends React.Component {
	render() {
		return(
			<div className="banner">
				{this.props.children}
			</div>
		)
	}
}

export default Banner;