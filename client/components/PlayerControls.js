import React from 'react';

class PlayerControls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTrackUrl: null,
			currentTrackId: null			
		}
	}

	render() {
		return (
			<div id="player-controls">
			</div>
		)
	}
}

export default PlayerControls;			