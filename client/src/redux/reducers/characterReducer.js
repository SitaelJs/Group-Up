import { GET_USER_CHARACTERISITCS } from '../types/characterTypes'

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_CHARACTERISITCS:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
