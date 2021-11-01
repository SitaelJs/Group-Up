import { ADD_NEW_GROUP } from '../types/groupsTypes'

export default function groupsReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_GROUP:
      return [...state, action.payload]

    default:
      return state
  }
}
