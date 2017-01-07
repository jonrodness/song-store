import React from 'react';

class TrackInfo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='track-info'>
				<span className='artist'>{this.props.artistName}</span>			
				<span className='title'>{this.props.trackTitle}</span>
			</div>
		)
	}
}

export default TrackInfo