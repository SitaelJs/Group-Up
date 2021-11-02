import { GET_ALL_USERS, GET_USER_CHARACTERISITCS } from '../types/userTypes'

export default function userReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload

    case GET_USER_CHARACTERISITCS:
      return action.payload

    default:
      return state
  }
}
