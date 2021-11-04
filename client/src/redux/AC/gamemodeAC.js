import axios from 'axios'
import { GET_GAME_MODE } from '../types/gamemodeTypes'

const getGameMode = (gameId) => async (dispatch) => {
  const preResponse = await axios.get(`http://localhost:3001/games/${gameId}`, {
    withCredentials: true,
  })
  const response = await preResponse.data
  dispatch({
    type: GET_GAME_MODE,
    payload: response,
  })
}

export default getGameMode
