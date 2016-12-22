import React, { Component, PropTypes } from 'react'
import TracksChart from '../components/TracksChart'

class TracksChartContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tracks: []
		}
	}

	componentDidMount() {
		const url = '/api/tracks?timespan' + this.props.timespan
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
			<TracksChart tracks={this.state.tracks}></TracksChart>
		)
	}
}

TracksChartContainer.propTypes = {
	timespan: PropTypes.string.isRequired
}

export default TracksChartContainer