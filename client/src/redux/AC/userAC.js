/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { GET_ALL_USERS, GET_USER_CHARACTERISITCS } from '../types/userTypes'

export const getAllUser = () => async (dispatch) => {
  const preRespopnse = await axios.get('http://localhost:3001/users')
  const response = await preRespopnse.data
  dispatch({
    type: GET_ALL_USERS,
    payload: response,
  })
}

export const getCharacter = () => async (dispatch) => {
  const preRespopnse = await axios.get(
    'http://localhost:3001/users/characterisitics'
  )
  const response = await preRespopnse.data

  dispatch({
    type: GET_USER_CHARACTERISITCS,
    payload: response,
  })
}
