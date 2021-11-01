import axios from 'axios'
import { ADD_NEW_GROUP } from '../types/groupsTypes'

const addNewGroup = (newGroup) => async (dispatch) => {
  const group = (await axios.post('http://localhost:3001/groups', newGroup))
    .data
  // console.log(group)

  dispatch({
    type: ADD_NEW_GROUP,
    payload: group,
  })
}

export default addNewGroup
