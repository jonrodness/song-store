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
				{
					!HIDE ? 
					(<div>	
						<section className='image-panel1'>
							<h1>Let your music do the talking.</h1>
						</section>
						<section className='inter-panel1'>
							<h1></h1>
						</section>
					</div>
					)
					: (<div></div>)
				}
				</div>
		)
	}
}

export default Home;