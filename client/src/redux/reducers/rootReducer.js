import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gamemodeReducer from './gamemodeReducer'
import groupsReducer from './groupsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  games: gameReducer,
  gameMode: gamemodeReducer,
  groups: groupsReducer,
  users: userReducer,
  characterisitics: userReducer,

})

export default rootReducer
