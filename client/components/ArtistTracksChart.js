import React, { Component, PropTypes } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'
import '../sass/artistTracksContainer.scss';
import MdClose from 'react-icons/lib/md/close'

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
				encType='multipart/form-data'>
				<label>
					Upload a track:
					<input type='file' name='track' id='file-upload-btn' defaultValue={this.props.uploadFile} onChange={this.props.handleFileChange}/>
				</label>
				<input type='submit' value='Upload' />
			</form>
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
					headerHeight={50}>
					<Column
						header={<Cell>Title</Cell>}
						cell={props => (
							<Cell {...props}>
								<a 
									onClick={() => {this.props.onSelectTrack(this.props.tracks[props.rowIndex])}} 
									href='#' >
									{this.props.tracks[props.rowIndex].title}
								</a>
								<input type='button' value='Remove' className='remove-btn'>MdClose</input>
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