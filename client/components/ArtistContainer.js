import React from 'react';
import TrackListContainer from './TrackListContainer'
import $ from 'jquery';

class Artist extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				<h1>{this.props.artist.name}</h1>
				<div id='profile-image'></div>
				<TrackListContainer artistId={this.props.artistId}></TrackListContainer>
			</div>
		)
	}
}

class ArtistContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			artist: {
				name: undefined,
				link: undefined				
			}
		}
	}

	componentDidMount() {
		let id = this.props.params.id
		$.ajax({
			url: "/api/artists/" + id,
			type: "get",
			contentType: "application/json",
			success: (data) => {
				this.setState({
					artist: data
				})			
			},
			error: (xhr, status, err) => {
				console.error("Could not get artist data")
			}
		})
	}

	render() {
		return(
			<Artist artistId={this.props.params.id} artist={this.state.artist}></Artist>
		)
	}
}

export default ArtistContainer;