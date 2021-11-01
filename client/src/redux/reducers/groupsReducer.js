import { ADD_NEW_GROUP, GET_ALL_GROUPS } from '../types/groupsTypes'

export default function groupsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_GROUPS:
      return action.payload

    case ADD_NEW_GROUP:
      return [...state, action.payload]

    default:
      return state
  }
}
