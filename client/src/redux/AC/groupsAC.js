import axios from 'axios'
import {
  ADD_NEW_GROUP,
  FILTER_GROUPS,
  GET_ALL_GROUPS,
} from '../types/groupsTypes'
import { CHANGE_GROUP } from '../types/userTypes'

export const getAllGroups = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/groups', {
    withCredentials: true,
  })
  const allGroups = await response.data
  dispatch({
    type: GET_ALL_GROUPS,
    payload: allGroups,
  })
}

export const addNewGroup = (newGroup) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/groups', newGroup, {
    withCredentials: true,
  })
  const group = await response.data
  dispatch({
    type: ADD_NEW_GROUP,
    payload: group,
  })
}

export const setFilterGroup = (filtred) => ({
  type: FILTER_GROUPS,
  payload: filtred,
})

export const filterGroups = (text) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3001/groups/?_search=${text}`,
    {
      withCredentials: true,
    }
  )
  const filtred = await response.data
  dispatch(setFilterGroup(filtred))
}

export const changeGroupForUser = (groupId) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3001/groups/change/${groupId}`,
    { withCredentials: true }
  )
  const userForGroup = await response.data
  dispatch({
    type: CHANGE_GROUP,
    payload: { userForGroup },
  })
}

export const groupDelete = (groupId) => async () => {
  const response = await axios.delete(
    `http://localhost:3001/groups/delete/${groupId}`,
    { withCredentials: true }
  )
  await response.data
}
