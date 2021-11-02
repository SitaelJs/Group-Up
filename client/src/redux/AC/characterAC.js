/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

import { GET_USER_CHARACTERISITCS } from '../types/characterTypes'

export const getCharacter = () => async (dispatch) => {
  const response = (await axios.get('http://localhost:3001/users/characterisitics'))
  const data = await response.data

  dispatch(setCharacter(data))
}

export const setCharacter = (data) => ({
  type: GET_USER_CHARACTERISITCS,
  payload: data
})
