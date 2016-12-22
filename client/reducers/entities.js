import _ from 'lodash'
import { REQUEST_ARTISTS, RECEIVE_ARTISTS } from '../actions'

const entities = (state = {
	artists: [],
}, action) => {
	switch (action.type) {
		case REQUEST_ARTISTS: 
			return _.assign({}, state, {
			})
		case RECEIVE_ARTISTS:
			return _.assign({}, state, {
				items: action.artists,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

export default entities