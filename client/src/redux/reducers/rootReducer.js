import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gamemodeReducer from './gamemodeReducer'
import groupsReducer from './groupsReducer'
import modesReducer from './modesReducer'
import positionsReducer from './positionsReducer'

const rootReducer = combineReducers({
  games: gameReducer,
  gameMode: gamemodeReducer,
  groups: groupsReducer,
  modes: modesReducer,
  positions: positionsReducer,
})

export default rootReducer
