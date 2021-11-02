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
      return state.map((el) => {
        if (
          el.id === action.payload.userId
          && el.groupId === action.payload.groupId
        ) {
          return {
            ...el,
            groupId: null,
          }
        } if (el.id === action.payload.userId) {
          return {
            ...el,
            groupId: action.payload.groupId,
          }
        }
        return el
      })

    default:
      return state
  }
}
