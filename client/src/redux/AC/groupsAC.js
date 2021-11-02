import axios from 'axios'
import { ADD_NEW_GROUP, GET_ALL_GROUPS } from '../types/groupsTypes'

export const addNewGroup = (newGroup) => async (dispatch) => {
  const group = (await axios.post('http://localhost:3001/groups', newGroup))
    .data

  dispatch({
    type: ADD_NEW_GROUP,
    payload: group,
  })
}

export const getAllGroups = () => async (dispatch) => {
  const allGroups = (await axios('http://localhost:3001/groups')).data

  dispatch({
    type: GET_ALL_GROUPS,
    payload: allGroups,
  })
}
