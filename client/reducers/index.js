import { combineReducers } from 'redux'
import entities from './entities'
import playingTrack from './playingTrack'

const app = combineReducers({
	entities,
	playingTrack
})

export default app