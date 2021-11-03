import {
  ADD_NEW_GROUP,
  FILTER_GROUPS,
  GET_ALL_GROUPS,
} from '../types/groupsTypes'

export default function groupsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_GROUPS:
      return action.payload

    case ADD_NEW_GROUP:
      return [...state, action.payload]

    case FILTER_GROUPS:
      // console.log(action.payload)
      return action.payload

    default:
      return state
  }
}
