import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'
import '../sass/artistTracksChart.scss'

import MdFileUpload from 'react-icons/lib/md/file-upload'
import MdClose from 'react-icons/lib/md/close'
import FaEyeSlash from 'react-icons/lib/fa/eye-slash'
import FaEye from 'react-icons/lib/fa/eye'

class ArtistTracksChart extends Component  {
	constructor(props) {
		super(props)	
	}

	render() {	
		return(
			<Table
				rowsCount={this.props.tracks.length}
				rowHeight={50}
				width={this.props.containerWidth}
				height={this.props.containerHeight}
				headerHeight={50} >
				<Column
					header={ <Cell className='title-header'>Title</Cell> }
					cell={props => (
						<Cell {...props}>
							<div className='track-options-container'>
								{this.props.hasUploadRights ? (
									<div className='track-options'>
										<a href='#' className='close-btn'>
											<MdClose />
										</a>
										<a href='#' className='visibility-btn'>
											<FaEye />
										</a>
									</div>									
									) : null}
								<a 
									onClick={() => {this.props.onSelectTrack(this.props.tracks[props.rowIndex])}} 
									href='#'
									className='cell-link' >
									{this.props.tracks[props.rowIndex].title}
								</a>
							</div>
						</Cell>
					)}
					width={300}
					flexGrow={1} />
				<Column
					header={ <Cell>Date Added</Cell> }
					cell={props => (
						<Cell {...props}>
							{this.props.tracks[props.rowIndex].dateAdded}							
						</Cell>
					)}
					width={50}
					flexGrow={1} />
			</Table>
		)
	}
}

ArtistTracksChart.propTypes = {
	tracks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		artistName: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onSelectTrack: PropTypes.func.isRequired
}

// Use react-dimensions to make component responsive
export default Dimensions({className:'react-dimensions-chart-wrapper artist-tracks-chart', elementResize: true})(ArtistTracksChart)