import {
  CHANGE_GROUP,
  GET_ALL_USERS,
  GET_USER_FOR_GROUP,
  SET_USER,
  GET_USER_CHARACTERISITCS,
} from '../types/userTypes'

export default function usersReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SET_USER:
      return payload

    case GET_ALL_USERS:
      return payload

    case GET_USER_CHARACTERISITCS:
      return payload

    case GET_USER_FOR_GROUP:
      return payload

    case CHANGE_GROUP:
      return state.map((el) => {
        if (el.id === payload.userId && el.groupId === payload.groupId) {
          return {
            ...el,
            groupId: null,
          }
        }
        if (el.id === payload.userId) {
          return {
            ...el,
            groupId: payload.groupId,
          }
        }
        return el
      })

    default:
      return state
  }
}