import axios from 'axios'
import { GET_GAME_MODE } from '../types/gamemodeTypes'

const getGameMode = (gameId) => async (dispatch) => {
  const response = (await axios.get(`http://localhost:3001/games/${gameId}`))
    .data
  dispatch({
    type: GET_GAME_MODE,
    payload: response,
  })
}
export default getGameMode
