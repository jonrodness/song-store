import React, { Component, PropTypes } from 'react'
import ArtistTracksChart from '../components/ArtistTracksChart'
import { connect } from 'react-redux'
import { setPlayTrack } from '../actions'

class ArtistTracksChartContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tracks: []
		}
		this.onSelectTrack = this.onSelectTrack.bind(this)
		this.getTracks = this.getTracks.bind(this)
	}

	componentDidMount() {
		this.getTracks()
	}

	getTracks() {
		const url = '/api/artists/' + this.props.id + '/tracks'
		fetch(url, {
			credentials: 'include'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
				tracks: json
			})
		})		
	}
    
    onSelectTrack(track) {
      	this.props.dispatch(setPlayTrack(track))
    }

	render() {
		return(
			<ArtistTracksChart 
				{...this.state}
				onSelectTrack={this.onSelectTrack}
				hasUploadRights={this.props.hasUploadRights}
				deleteTrack={this.props.deleteTrack}
				toggleVisibility={this.props.toggleVisibility} />
		)
	}
}

ArtistTracksChartContainer.propTypes = {
	id: PropTypes.string.isRequired
}

export default connect(null, null, null, {withRef: true})(ArtistTracksChartContainer)