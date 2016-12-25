import _ from 'lodash'
import { SET_PLAY_TRACK } from '../actions'

const playingTrack = (state = {
	url: null,
	title: null,
	artistName: null
}, action) => {
	switch (action.type) {
		case SET_PLAY_TRACK:
			return _.assign({}, state, {
				url: action.url,
				title: action.title,
				artistName: action.artistName
			})
		default:
			return state
	}
}

export default playingTrack