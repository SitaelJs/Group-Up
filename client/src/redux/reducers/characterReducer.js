/* eslint-disable no-param-reassign */
import { DECREMENT_VALUE, INCREMENT_VALUE, GET_USER_CHARACTERISTICS } from '../types/characterTypes'

export default function characterReducer(state = [], action) {
  switch (action.type) {
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

    case GET_USER_CHARACTERISTICS:
      return action.payload

    default:
      return state
  }
}
