import React from 'react';
import Banner from './Banner';
import '../sass/home.scss';

class Home extends React.Component {
	render() {
		return(
			<div>
				<Banner>
					<div id="banner-welcome">
						<h1 id="top-header">Let your music do the talking</h1>
	   					<div id="orb-box" className="container-fluid"></div>
					</div>
				</Banner>
			</div>
		)
	}
}

export default Home;