import ArtistTracksChartContainer from '../containers/ArtistTracksChartContainer'
import React, { PropTypes } from 'react'
import '../sass/artist.scss';

const Artist = ({ id, name }) => {
	return(
		<div>
			<h1 className='artist-name page-title'>{name}</h1>
			<ArtistTracksChartContainer id={id} />
		</div>
	)
}

Artist.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string
}

export default Artist