import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TrackInfo from './TrackInfo';
import '../sass/player.scss';
import $ from 'jquery';
import _ from 'lodash';
import { connect } from 'react-redux'

class AudioControls extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='audio-wrapper'>
				<audio controls id="audio-player" onPlay={this.props.onPlay} src={this.props.src}></audio>
			</div>
		)
	}
}

class Player extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let source = '/api/song'

		return (
			<div className='player-wrapper'>
				<div className='player'>
					<AudioControls 
						onPlay={this.confirmConsumption} 
						src={this.props.streamUrl} />			
					<TrackInfo 
						trackTitle={this.props.trackTitle}
						artistName={this.props.artistName} />			
				</div>
			</div>
		)
	}
}

const mapStateToProps = function(state, ownProps) {
	return {
		streamUrl: state.playingTrack.url,
		currentTrackId: state.playingTrack.id,
		trackTitle: state.playingTrack.title,
		artistName: state.playingTrack.artistName
	}
}

Player.defaultProps = {
	currentTrackId: "",
	streamUrl: "",
	trackTitle: "",
	artistName: ""
}

export default connect(mapStateToProps)(Player);