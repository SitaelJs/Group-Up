import axios from 'axios'
import { GET_ALL_GAMES } from '../types/gamesTypes'

const getAllGames = () => async (dispatch) => {
  const response = (await axios.get('http://localhost:3001/games')).data
  dispatch({
    type: GET_ALL_GAMES,
    payload: response,
  })
}
export default getAllGames
