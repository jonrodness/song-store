import ArtistTracksChartContainer from '../containers/ArtistTracksChartContainer'
import React, { PropTypes } from 'react'

const Artist = ({ id, name, link }) => {
	return(
		<div>
			<h1>{name}</h1>
			<div id='profile-image'></div>
			<ArtistTracksChartContainer id={id} />
		</div>
	)
}

Artist.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string
}

export default Artist