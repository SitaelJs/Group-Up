/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

import {
  GET_USER_CHARACTERISITCS, ADD_TOXIC, MINUS_TOXIC, ADD_FRIENDLY, MINUS_FRIENDLY, ADD_TEAM_PLAY, MINUS_TEAM_PLAY, ADD_STRATEGY, MINUS_STRATEGY, ADD_LEADER, MINUS_LEADER
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

export const addToxic = (id) => ({
  type: ADD_TOXIC,
  payload: id,
})

export const minusToxic = (id) => ({
  type: MINUS_TOXIC,
  payload: id,
})

export const addFriendly = (id) => ({
  type: ADD_FRIENDLY,
  payload: id
})

export const minusFriendly = (id) => ({
  type: MINUS_FRIENDLY,
  payload: id
})

export const addTeamPlay = (id) => ({
  type: ADD_TEAM_PLAY,
  payload: id
})

export const minusTeamPlay = (id) => ({
  type: MINUS_TEAM_PLAY,
  payload: id
})

export const addStrategy = (id) => ({
  type: ADD_STRATEGY,
  payload: id
})

export const minusStrategy = (id) => ({
  type: MINUS_STRATEGY,
  payload: id
})

export const addLeader = (id) => ({
  type: ADD_LEADER,
  payload: id
})

export const minusLeader = (id) => ({
  type: MINUS_LEADER,
  payload: id
})
