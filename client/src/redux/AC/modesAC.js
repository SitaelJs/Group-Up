import axios from 'axios'
import { GET_ALL_MODES } from '../types/modeTypes'

const getAllModes = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/modes')
  const allModes = await response.data
  dispatch({
    type: GET_ALL_MODES,
    payload: allModes,
  })
}

export default getAllModes
