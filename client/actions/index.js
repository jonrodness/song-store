import fetch from 'isomorphic-fetch'

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'
export const SET_PLAY_TRACK = 'SET_PLAY_TRACK'

function requestArtists() {
	return {
		type: REQUEST_ARTISTS
	}
}

function receiveArtists(json) {
	return {
		type: RECEIVE_ARTISTS,
		artists: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}

export function fetchArtists() {
	return dispatch => {
		dispatch(requestArtists())
		return fetch('/api/artists/')
			.then(response => response.json())
			.then(json => dispatch(receiveArtists(json)))
	}
}

export function setPlayTrack(track) {
	return {
		type: SET_PLAY_TRACK,
		url: track.url,
		title: track.title,
		artistName: artistName
	}
}