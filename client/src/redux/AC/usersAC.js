/* eslint-disable no-use-before-define */
import axios from 'axios'
import {
  CHANGE_GROUP,
  GET_ALL_USERS,
  GET_USER_FOR_GROUP,

} from '../types/userTypes'

export const getAllUsers = () => async (dispatch) => {
  const allUsers = (await axios('http://localhost:3001/users'))
  const data = await allUsers.data
  dispatch(setUser(data))
}
export const setUser = (data) => ({
  type: GET_ALL_USERS,
  payload: data
})

export const getUsersForGroup = (groupId) => async (dispatch) => {
  const usersForGroup = (await axios(`http://localhost:3001/groups/${groupId}`))
    .data
  dispatch({
    type: GET_USER_FOR_GROUP,
    payload: usersForGroup,
  })
}

export const changeGroupForUser = (userId, groupId) => async (dispatch) => {
  await axios.post(`http://localhost:3001/groups/${groupId}`, { userId })
  dispatch({
    type: CHANGE_GROUP,
    payload: {
      userId,
      groupId,
    },
  })
}
