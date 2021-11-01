import { GET_ALL_POSITIONS } from '../types/positionsTypes'

export default function positionsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POSITIONS:
      return action.payload

    default:
      return state
  }
}
