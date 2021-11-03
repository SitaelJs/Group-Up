import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gamemodeReducer from './gamemodeReducer'
import groupsReducer from './groupsReducer'
import modesReducer from './modesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  games: gameReducer,
  gameMode: gamemodeReducer,
  groups: groupsReducer,
  modes: modesReducer,
  users: usersReducer,
  auth: authReducer,
})

export default rootReducer
