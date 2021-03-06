import React, { PropTypes } from 'react'
import ArtistsChart from './ArtistsChart'

const ArtistsLayout = ({ artists }) => {
	return (
		<div className='page'>
			<h1 className='page-title'>Artists</h1>
			<div className='chart-container'>
				<ArtistsChart artists={artists} />
			</div>
		</div>
	)
}

ArtistsLayout.propTypes = {
	artists: PropTypes.arrayOf(PropTypes.shape({
	}).isRequired).isRequired
}

export default ArtistsLayout