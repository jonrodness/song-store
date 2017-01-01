import ArtistTracksChartContainer from '../containers/ArtistTracksChartContainer'
import UploadForm from './UploadForm'
import React, { Component, PropTypes } from 'react'


class Artist extends Component {
	constructor(props) {
		super(props)

		this.updateChart = this.updateChart.bind(this)
	}

	updateChart() {
		this.trackChart.getWrappedInstance().getTracks()
	}
	
	render() {
		let className = 'page artist-page'
		if (this.props.hasUploadRights) {
			className += ' upload-rights'
		}

		return (
			<div className={className}>
				<h1 className='artist-name page-title'>{this.props.name}</h1>
				{ this.props.hasUploadRights ? 
					<UploadForm
						onUploadFile={this.props.onUploadFile} 
						onHandleFileChange={this.props.onHandleFileChange}
						status={this.props.uploadStatus} 
						validFileSelected={this.props.validFileSelected} />
					: null }
				<div className='chart-container'>
					<ArtistTracksChartContainer 
						id={this.props.id} 
						deleteTrack={this.props.deleteTrack}
						toggleVisibility={this.props.toggleVisibility}
						hasUploadRights={this.props.hasUploadRights}
						ref={(chart) => { this.trackChart = chart }} />
				</div>
			</div>
		)		
	}
}

export default Artist