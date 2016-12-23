import React, { Component, PropTypes } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'

class UploadFileForm extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<form action='/api/track' method='post' encType='multipart/form-data'>
				<label>
					Upload a file:
					<input type='file' name='track' id='file-upload' defaultValue={this.props.uploadFile} onChange={this.props.handleFileChange}/>
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
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render() {
		return(
			<div>
				<UploadFileForm
					handleFileChange={this.handleFileChange}
					handleSubmit={this.handleSubmit}
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
								{this.props.tracks[props.rowIndex].title}
							</Cell>
						)}
						width={200}
						flexGrow={1} />
					<Column
						header={<Cell>Details</Cell>}
						cell={props => (
							<Cell {...props}>
							</Cell>
						)}
						width={200}
						flexGrow={1} />
				</Table>
			</div>	
		)
	}

	handleFileChange(file) {
		this.setState({
			uploadFile: file
		})
		console.log("this state uplaod file" + this.state.uploadFile)
	}

	handleSubmit() {
		var reader = new FileReader();

		reader.onerror = function(err) {
			console.log("Error reading file: " + err)
		}

		reader.onloadend = function(data) {

		}

	}	
}

ArtistTracksChart.propTypes = {
	tracks: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired).isRequired
}

// Use react-dimensions to make component responsive
export default Dimensions({className:'react-dimensions-chart-wrapper', elementResize: true})(ArtistTracksChart)