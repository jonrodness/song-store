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
		})		
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
				{...this.state} />
		)
	}
}

export default ArtistPage;