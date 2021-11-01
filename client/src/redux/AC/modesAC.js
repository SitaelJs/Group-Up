import axios from 'axios'
import { GET_ALL_MODES } from '../types/modeTypes'

const getAllModes = () => async (dispatch) => {
  const allModes = (await axios.get('http://localhost:3001/modes')).data
  dispatch({
    type: GET_ALL_MODES,
    payload: allModes,
  })
}

export default getAllModes
