import axios from 'axios'
import { GET_ALL_USERS, GET_USER_FOR_GROUP } from '../types/userTypes'

export const getAllUsers = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/users')
  const allUsers = await response.data
  dispatch({
    type: GET_ALL_USERS,
    payload: allUsers,
  })
}

export const getUsersForGroup = (groupId) => async (dispatch) => {
  const usersForGroup = await axios.get(
    `http://localhost:3001/groups/${groupId}`
  )
  const data = await usersForGroup.data
  dispatch({
    type: GET_USER_FOR_GROUP,
    payload: data,
  })
}
