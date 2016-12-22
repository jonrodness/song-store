import React from 'react';
import { browserHistory } from 'react-router';
import auth from '../auth';

class OAuth extends React.Component {
	constructor(props) {
		super(props)
		let result = this.props.params.result
		if (result) {
			auth.authenticateUser(result)
			browserHistory.push('/artists')
		} else {
			browserHistory.push('/home')			
		}
	}
	render() {
		return null
	}
}

export default OAuth;