import React from 'react';
import {Link} from 'react-router'
import $ from 'jquery';

class ArtistRow extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		// TODO: switch SCusername and SCId to app user name		
		let artistUrl = '/artists/' + this.props.artist._id
		return(
			<tr>
				<td><Link to={artistUrl}>{this.props.artist.SCUsername}</Link></td>
			</tr>
		)
	}
}

class ArtistList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let rowNodes = this.props.artists.map((artist) => {
			return (
				<ArtistRow key={artist._id} artist={artist}>
				</ArtistRow>
			)
		})

		return(
			<table>
				<thead>
					<tr>
						<th>Artist</th>
					</tr>
				</thead>
				<tbody>
					{rowNodes}
				</tbody>
			</table>
		)
	}
}

class ArtistListContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			artists: []
		}
	}
	componentDidMount() {
		$.ajax({
			url: '/api/artists/',
			type: 'get',
			contentType: 'application/json',
			success: (data) => {
				this.setState({
					artists: data
				})			
			},
			error: (xhr, status, err) => {
				console.error('Could not get artist list')
			}
		})
	}
	render() {
		return(
			<ArtistList artists={this.state.artists}></ArtistList>
		)
	}
}

export default ArtistListContainer;