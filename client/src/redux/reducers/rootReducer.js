import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gamemodeReducer from './gamemodeReducer'
import groupsReducer from './groupsReducer'
import modesReducer from './modesReducer'
import usersReducer from './usersReducer'
import characterReducer from './characterReducer'
import authReducer from './authReducer'
import dataSteamReducer from './dataSteamReducer'

const rootReducer = combineReducers({
  games: gameReducer,
  gameMode: gamemodeReducer,
  groups: groupsReducer,
  characterisitics: characterReducer,
  modes: modesReducer,
  users: usersReducer,
  auth: authReducer,
  dataSteam: dataSteamReducer,
})

export default rootReducer
