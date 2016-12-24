import React from 'react';
import $ from 'jquery';
import Artist from '../components/Artist'

class ArtistPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ""
		}
	}

	componentDidMount() {
		$.ajax({
			url: "/api/artists/" + this.props.params.id,
			type: "get",
			contentType: "application/json",
			success: (data) => {
				this.setState({
					name: data.name
				})			
			},
			error: (xhr, status, err) => {
				console.error("Could not get artist data")
			}
		})
	}

	render() {
		return(
			<Artist id={this.props.params.id} {...this.state}></Artist>
		)
	}
}

export default ArtistPage;