import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import '../sass/uploadForm.scss';

class UploadFileForm extends Component {
	constructor(props) {
		super(props)

		this.openFilePrompt = this.openFilePrompt.bind(this)
		this.setFile = this.setFile.bind(this)
	}

	openFilePrompt() {
      this.dropzone.open();
    }	

	setFile (acceptedFiles) {
        this.props.onHandleFileChange(acceptedFiles[0])
    }

	render() {	
		return(
			<div className='upload-form'>
				<Dropzone className='dropzone' onDrop={this.setFile} ref={ (node) => { this.dropzone = node } }>
            	</Dropzone>
            	<p>{this.props.status}</p>
            	<input type='button' onClick={this.openFilePrompt} value='Choose File' />
            	{this.props.validFileSelected ? <input type='button' onClick={this.props.onUploadFile} value='Upload' />
                	: <input type='button' onClick={this.props.onUploadFile} className='disabled' value='Upload' disabled />            		
            	}
        	</div>
		)
	}
}

export default UploadFileForm