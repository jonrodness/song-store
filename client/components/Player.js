import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PlayerControls from './PlayerControls';
import '../sass/player.scss';
import $ from 'jquery';
import _ from 'lodash';

class AudioControls extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <audio controls id="audio-player" onPlay={this.props.onPlay} src={this.props.src}></audio>
	}
}

class Player extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTrackId: null,
			stream_url: null
		}
	}
	
	render() {
		let source = "/api/song"

		return (
			<div className="player">
				<AudioControls id="audio-player" onPlay={this.confirmConsumption} src={source}></AudioControls>
				<PlayerControls />
			</div>
		)
	}
}

export default Player;