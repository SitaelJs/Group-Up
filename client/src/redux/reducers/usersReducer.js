import {
  CHANGE_GROUP,
  GET_ALL_USERS,
  GET_USER_FOR_GROUP,
} from '../types/userTypes'
import { GET_USER_CHARACTERISTICS } from '../types/characterTypes'

const usersReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_USERS:
      return payload

    case GET_USER_CHARACTERISTICS:
      return payload

    case GET_USER_FOR_GROUP:
      return payload

    case CHANGE_GROUP:
      return action.payload.userForGroup
      // return state.map((el) => {
      //   if (el.id === payload.userId && el.groupId === payload.groupId) {
      //     return {
      //       ...el,
      //       groupId: null,
      //     }
      //   }
      //   if (el.id === payload.userId) {
      //     return {
      //       ...el,
      //       groupId: payload.groupId,
      //     }
      //   }
      //   return el
      // })

    default:
      return state
  }
}

export default usersReducer
