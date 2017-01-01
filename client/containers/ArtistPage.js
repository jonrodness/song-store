import React from 'react';
import $ from 'jquery';
import Artist from '../components/Artist'
import auth from '../auth';

class ArtistPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			uploadFile: {
				name: ''
			},
			validFileSelected: false,
			uploadStatus: 'No file selected for upload',
			hasUploadRights: auth.getToken() === this.props.params.id
		}

		this.onUploadFile = this.onUploadFile.bind(this)		
		this.onHandleFileChange = this.onHandleFileChange.bind(this)
		this.updateChart = this.updateChart.bind(this)
		this.deleteTrack = this.deleteTrack.bind(this)
		this.toggleVisibility = this.toggleVisibility.bind(this)
	}

	componentDidMount() {
		$.ajax({
			url: "/api/artists/" + this.props.params.id,
			type: "get",
			contentType: "application/json",
			success: (data) => {
				this.setState({
					name: data.name
				})			
			},
			error: (xhr, status, err) => {
				console.error("Could not get artist data")
			}
		})
	}

	onUploadFile() {	
		let file = this.state.uploadFile
		let formData = new FormData()
		formData.append('track', file)

		fetch('/api/track/', {
			method: 'POST',
			body: formData,
			credentials: 'include'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
				uploadFile: {
					name: ''
				},
				validFileSelected: false,	
				uploadStatus: json
			})
			this.updateChart()
		})		
	}

	deleteTrack(id) {
		const url = '/api/artists/' + this.props.id + '/tracks'
		fetch(url, {
			credentials: 'include'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
				tracks: json
			})
		})	
	}

	toggleVisibility(id) {
		const url = '/api/artists/' + this.props.id + '/tracks'
		fetch(url, {
			credentials: 'include'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
				tracks: json
			})
		})	
	}

	updateChart() {
		this.artistComponent.updateChart()
	}

	onHandleFileChange(file) {
		if (file.type === 'audio/mp3') {
			this.setState({
				uploadFile: file,
				validFileSelected: true,
				uploadStatus: file.name
			})
		} else {
			this.setState({
				uploadFile: {
					name: ''
				},
				validFileSelected: false,
				uploadStatus: 'Please select a valid mp3 file'
			})
		}
	}	

	render() {
		return(
			<Artist 
				id={this.props.params.id} 
				onUploadFile={this.onUploadFile} 
				onHandleFileChange={this.onHandleFileChange}
				ref={(artist) => { this.artistComponent = artist }}
				{...this.state} />
		)
	}
}

export default ArtistPage;