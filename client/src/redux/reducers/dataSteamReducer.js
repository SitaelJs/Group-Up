import { GET_DATA_FROM_STEAM } from '../types/userTypes'

const dataSteamReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_DATA_FROM_STEAM:
      return payload

    default:
      return state
  }
}
export default dataSteamReducer
