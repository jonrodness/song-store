import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ArtistRow = ({ _id, SCUsername }) => {
	// TODO: switch SCusername and SCId to app user name		
	return(
		<tr>
			<td><Link to={'/artists/' + _id}>{SCUsername}</Link></td>
		</tr>
	)
}

ArtistRow.propTypes = {
	id: PropTypes.string.isRequired,
	SCUsername: PropTypes.string.isRequired
}

const ArtistList = ({ artists }) => {
	return(
		<table>
			<thead>
				<tr>
					<th>Artist</th>
				</tr>
			</thead>
			<tbody>
				{artists.map(artist => {
					return (
						<ArtistRow 
							key={artist._id} 
							_id={artist._id} 
							SCUsername={artist.SCUsername} 
						/>
					)
				})}
			</tbody>
		</table>
	)
}

ArtistList.propTypes = {
	artists: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		SCUsername: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default ArtistList