import fetch from 'isomorphic-fetch'

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'

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