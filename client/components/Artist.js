import ArtistTracksChartContainer from '../containers/ArtistTracksChartContainer'
import UploadForm from './UploadForm'
import React, { PropTypes } from 'react'

const Artist = ({ id, name, onHandleFileChange, onUploadFile, 
	uploadStatus, hasUploadRights, validFileSelected }) => {
	
	let className = 'page artist-page'
	if (hasUploadRights) {
		className += ' upload-rights'
	}

	return (
		<div className={className}>
			<h1 className='artist-name page-title'>{name}</h1>
			{ hasUploadRights ? 
				<UploadForm
					onUploadFile={onUploadFile} 
					onHandleFileChange={onHandleFileChange}
					status={uploadStatus} 
					validFileSelected={validFileSelected}
				/>
				: null }
			<div className='chart-container'>
				<ArtistTracksChartContainer id={id} hasUploadRights={hasUploadRights} />
			</div>
		</div>
	)
}

Artist.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string
}

export default Artist