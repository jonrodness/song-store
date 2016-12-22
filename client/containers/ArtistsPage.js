import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import ArtistsPageLayout from '../components/ArtistsPageLayout'

class ArtistsPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			artists: []
		}
	}
	componentDidMount() {
		fetch('/api/artists/')
			.then(response => response.json())
			.then(json => {
				this.setState({
					artists: json
				})
			})
	}
	render() {
		return(
			<ArtistsPageLayout artists={this.state.artists}></ArtistsPageLayout>
		)
	}
}

export default ArtistsPage