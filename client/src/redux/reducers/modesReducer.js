import { GET_ALL_MODES } from '../types/modeTypes'

export default function modesReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_MODES:
      return action.payload

    default:
      return state
  }
}
