import { GET_GAME_MODE } from '../types/gamemodeTypes'

export default function gamemodeReducer(state = [], action) {
  switch (action.type) {
    case GET_GAME_MODE:
      return action.payload

    default:
      return state
  }
}
