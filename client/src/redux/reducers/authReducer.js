import { SET_USER, CLEAR_USER } from '../types/userTypes'

const authReducer = (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_USER:
      return payload
    case CLEAR_USER:
      return payload
    default:
      return state
  }
}

export default authReducer
