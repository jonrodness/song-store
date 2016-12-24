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
		const url = '/api/tracks/?user_id=' + this.props.id
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