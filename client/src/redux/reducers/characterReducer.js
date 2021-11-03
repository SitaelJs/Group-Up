/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import {
  GET_USER_CHARACTERISITCS, INCREMENT_VALUE, DECREMENT_VALUE
} from '../types/characterTypes'

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_CHARACTERISITCS:
      console.log(action.payload)
      return action.payload

    case INCREMENT_VALUE:
      return state.map((el) => {
        if (el.toUserId === +action.payload.id) {
          el = action.payload.character
          return el
        }
        return el
      })

    case DECREMENT_VALUE:
      return state.map((el) => {
        if (el.toUserId === +action.payload.id) {
          el = action.payload.character
          return el
        }
        return el
      })

    default:
      return state
  }
}
