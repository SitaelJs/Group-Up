import { GET_ALL_GAMES } from '../types/gamesTypes'

export default function gameReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return action.payload

    default:
      return state
  }
}
