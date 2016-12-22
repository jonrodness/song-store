import React, { Component, PropTypes } from 'react'
import ArtistTracksChart from '../components/ArtistTracksChart'

class ArtistTracksChartContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tracks: []
		}
	}

	componentDidMount() {
		const url = '/api/artists/' + this.props.id + '/tracks'
		fetch(url)
			.then(response => response.json())
			.then(json => {
				this.setState({
					tracks: json
				})
			})
	}

	render() {
		return(
			<ArtistTracksChart {...this.state} />
		)
	}
}

ArtistTracksChartContainer.propTypes = {
	id: PropTypes.string.isRequired
}

export default ArtistTracksChartContainer