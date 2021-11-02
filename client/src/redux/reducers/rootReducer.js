import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gamemodeReducer from './gamemodeReducer'
import groupsReducer from './groupsReducer'
import modesReducer from './modesReducer'
import usersReducer from './usersReducer'
import characterReducer from './characterReducer'

const rootReducer = combineReducers({
  games: gameReducer,
  gameMode: gamemodeReducer,
  groups: groupsReducer,
  characterisitics: characterReducer,
  modes: modesReducer,
  users: usersReducer,
})

export default rootReducer
