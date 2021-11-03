import {
  CHANGE_GROUP,
  GET_ALL_USERS,
  GET_USER_FOR_GROUP,
} from '../types/userTypes'

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload

    case GET_USER_FOR_GROUP:
      return action.payload

    case CHANGE_GROUP:
      return action.payload.userForGroup

    default:
      return state
  }
}
