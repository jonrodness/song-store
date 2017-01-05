import React from 'react'
import TracksChart from './TracksChart'
import '../sass/home.scss'

const HIDE = false;

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			trackData: []
		}
	}
	componentDidMount() {
		
	}
	render() {
		return(
				<div className='home'>			
					<section className='image-panel1'>
						<h1>Store and share your tunes</h1>
					</section>
				</div>
		)
	}
}

export default Home;