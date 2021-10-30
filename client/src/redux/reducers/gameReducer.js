import GET_ALL_GAMES from '../types/gamesTypes'

const gameReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return action.payload

    default:
      return state
  }
}

export default gameReducer
