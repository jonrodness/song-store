import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'
import '../sass/artistTracksContainer.scss';
import MdClose from 'react-icons/lib/md/close'
import FaEyeSlash from 'react-icons/lib/fa/eye-slash'
import FaEye from 'react-icons/lib/fa/eye'
import '../sass/artistTracksChart.scss'

class UploadFileForm extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<form 
				className='upload-form' 
				action='/api/track' 
				method='post' 
				encType='multipart/form-data' >
				<label>
					Upload a track:
					<input type='file' name='track' id='file-upload-btn' defaultValue={this.props.uploadFile} onChange={this.props.handleFileChange}/>
				</label>
				<input type='submit' value='Upload' />
			</form>
		)
	}
}

class ArtistRow extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		// TODO: switch SCusername and SCId to app user name		
		let artistUrl = '/artists/' + this.props.track.id
		return(
			<tr key={this.props.track.id}>
				<td>
					<div className='track-options-container'>
						<a href='#' className='close-btn'>
							<MdClose />
						</a>
						<a href='#' className='visibility-btn'>
							<FaEye />
						</a>
						<a 
							onClick={() => {this.props.onSelectTrack(track)}} 
							href='#'
							className='track-title' >
							{this.props.track.title}
						</a>
					</div>
				</td>
				<td>
					{this.props.track.dateAdded}
				</td>
			</tr>
		)
	}
}

class ArtistList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let rowNodes = this.props.tracks.map((track) => {
			return (
				<ArtistRow key={track.id} track={track}>
				</ArtistRow>
			)
		})

		return(
			<table className='artist-tracks-chart-table'>
				<thead>
					<tr>
						<th>Title</th>
						<th>Date Added</th>
					</tr>
				</thead>
				<tbody>
					{rowNodes}
				</tbody>
			</table>
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
				<ArtistList tracks={this.props.tracks}></ArtistList>
			</div>
		)
	}	

	// render() {
	// 	return(
	// 		<div>
	// 			<UploadFileForm
	// 				handleFileChange={this.handleFileChange}
	// 				uploadFile={this.uploadFile} />
	// 			<table className='track-table'>
	// 				<tr>



	// 			<Table
	// 				rowsCount={this.props.tracks.length}
	// 				rowHeight={50}
	// 				width={this.props.containerWidth}
	// 				height={this.props.containerHeight}
	// 				headerHeight={50}
	// 				className='artist-tracks-chart-table'>
	// 				<Column
	// 					header={<Cell>Title</Cell>}
	// 					cell={props => (
	// 						<Cell {...props}>
	// 							<div className='track-options-container'>
	// 								<a href='#' className='close-btn'>
	// 									<MdClose />
	// 								</a>
	// 								<a href='#' className='visibility-btn'>
	// 									<FaEye />
	// 								</a>
	// 								<a 
	// 									onClick={() => {this.props.onSelectTrack(this.props.tracks[props.rowIndex])}} 
	// 									href='#'
	// 									className='track-title' >
	// 									{this.props.tracks[props.rowIndex].title}
	// 								</a>
	// 							</div>
	// 						</Cell>
	// 					)}
	// 					width={300}
	// 					flexGrow={1} />
	// 				<Column
	// 					header={<Cell>Date Added</Cell>}
	// 					cell={props => (
	// 						<Cell {...props}>
	// 							{this.props.tracks[props.rowIndex].dateAdded}							
	// 						</Cell>
	// 					)}
	// 					width={50}
	// 					flexGrow={1} />
	// 			</Table>
	// 		</div>	
	// 	)
	// }

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
export default ArtistTracksChart