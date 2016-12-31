import ArtistTracksChartContainer from '../containers/ArtistTracksChartContainer'
import UploadForm from './UploadForm'
import React, { PropTypes } from 'react'

const Artist = ({ id, name, uploadFile, onHandleFileChange, 
	onUploadFile, uploadStatus, hasUploadRights, validFileSelected }) => {
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
					fileName={uploadFile.name}
					status={uploadStatus} 
					validFileSelected={validFileSelected}
				/>
				: null }
			<ArtistTracksChartContainer id={id} hasUploadRights={hasUploadRights} />
		</div>
	)
}

Artist.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string
}

export default Artist