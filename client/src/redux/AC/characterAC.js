/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

import {
  GET_USER_CHARACTERISITCS, INCREMENT_VALUE, DECREMENT_VALUE
} from '../types/characterTypes'

export const getCharacter = () => async (dispatch) => {
  const response = (await axios.get('http://localhost:3001/users/characterisitics'))
  const data = await response.data

  dispatch(setCharacter(data))
}

export const setCharacter = (data) => ({
  type: GET_USER_CHARACTERISITCS,
  payload: data
})

export const postIncrement = (id, value, charac) => async (dispatch) => {
  const result = await axios.post('http://localhost:3001/users/characterisitics/inc', { id, value, charac })
  const character = result.data
  dispatch(increment(id, character))
}

export const postDecrement = (id, value, charac) => async (dispatch) => {
  const result = await axios.post('http://localhost:3001/users/characterisitics/dec', { id, value, charac })
  const character = await result.data
  dispatch(decrement(id, character))
}

export const increment = (id, character) => ({
  type: INCREMENT_VALUE,
  payload: { id, character },
})

export const decrement = (id, character) => ({
  type: DECREMENT_VALUE,
  payload: { id, character },
})
