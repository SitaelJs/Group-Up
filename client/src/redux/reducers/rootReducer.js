import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gamemodeReducer from './gamemodeReducer'
import groupsReducer from './groupsReducer'

const rootReducer = combineReducers({
  games: gameReducer,
  gameMode: gamemodeReducer,
  groups: groupsReducer,
})

export default rootReducer
