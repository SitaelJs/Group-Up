import { GET_ALL_USERS } from '../types/userTypes'

export default function userReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload

    default:
      return state
  }
}
