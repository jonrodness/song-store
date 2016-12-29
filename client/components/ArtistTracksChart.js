import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'
import '../sass/artistTracksContainer.scss';
import MdClose from 'react-icons/lib/md/close'
import FaEyeSlash from 'react-icons/lib/fa/eye-slash'
import FaEye from 'react-icons/lib/fa/eye'
import MdFileUpload from 'react-icons/lib/md/file-upload'
import Dropzone from 'react-dropzone'
import '../sass/artistTracksChart.scss'

class UploadFileForm extends Component {
	constructor(props) {
		super(props)
	}

	onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles)
      console.log('Rejected files: ', rejectedFiles)
	}

	render() {
		return(
			// <form 
			// 	className='upload-form' 
			// 	action='/api/track' 
			// 	method='post' 
			// 	encType='multipart/form-data'
			// 	onsubmit="return false" >
			// 	<label>
			// 		Upload a track:
			// 		<input type='file' name='track' id='file-upload-btn' defaultValue={this.props.uploadFile} onChange={this.props.handleFileChange}/>
			// 	</label>
			// 	<MdFileUpload />
			// 	<input type='submit'/>
			// </form>
<Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
		)
	}
}

class ArtistTracksChart extends Component  {
	constructor(props) {
		super(props)

		this.state = {
			uploadFile: null
		}

		this.handleFileChange = this.handleFileChange.bind(this)
	}

	render() {
		return(
			<div>
				<UploadFileForm
					handleFileChange={this.handleFileChange}
					uploadFile={this.uploadFile} />

				<Table
					rowsCount={this.props.tracks.length}
					rowHeight={50}
					width={this.props.containerWidth}
					height={this.props.containerHeight}
					headerHeight={50}
					className='artist-tracks-chart-table'>
					<Column
						header={<Cell>Title</Cell>}
						cell={props => (
							<Cell {...props}>
								<div className='track-options-container'>
									<a href='#' className='close-btn'>
										<MdClose />
									</a>
									<a href='#' className='visibility-btn'>
										<FaEye />
									</a>
									<a 
										onClick={() => {this.props.onSelectTrack(this.props.tracks[props.rowIndex])}} 
										href='#'
										className='track-title' >
										{this.props.tracks[props.rowIndex].title}
									</a>
								</div>
							</Cell>
						)}
						width={300}
						flexGrow={1} />
					<Column
						header={<Cell>Date Added</Cell>}
						cell={props => (
							<Cell {...props}>
								{this.props.tracks[props.rowIndex].dateAdded}							
							</Cell>
						)}
						width={50}
						flexGrow={1} />
				</Table>
			</div>	
		)
	}

	handleFileChange(file) {
		this.setState({
			uploadFile: file
		})
		console.log("this state upload file" + this.state.uploadFile)
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
export default Dimensions({className:'react-dimensions-chart-wrapper', elementResize: true})(ArtistTracksChart)