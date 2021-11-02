import axios from 'axios'
import {
  CHANGE_GROUP,
  GET_USER_FOR_GROUP,
  SET_USER,
  GET_ALL_USERS,
  GET_USER_CHARACTERISITCS,
} from '../types/userTypes'

const serverPuth = process.env.REACT_APP_URL_BACK_SERVER

export const getAllUsers = () => async (dispatch) => {
  const allUsers = (await axios(`${serverPuth}/users`)).data
  dispatch({
    type: GET_ALL_USERS,
    payload: allUsers,
  })
}

export const getUsersForGroup = (groupId) => async (dispatch) => {
  const usersForGroup = (await axios(`${serverPuth}/groups/${groupId}`)).data
  dispatch({
    type: GET_USER_FOR_GROUP,
    payload: usersForGroup,
  })
}

export const changeGroupForUser = (userId, groupId) => async (dispatch) => {
  await axios.post(`${serverPuth}/groups/${groupId}`, { userId })
  dispatch({
    type: CHANGE_GROUP,
    payload: {
      userId,
      groupId,
    },
  })
}

export const signUpUser = (value) => async (dispatch) => {
  const response = await axios.post(`${serverPuth}/auth/signup`, value, {
    withCredentials: true,
  })
  dispatch({ type: SET_USER, payload: response.data })
}

export const signInUser = (value) => async (dispatch) => {
  const response = await axios.post(`${serverPuth}/auth/signin`, value, {
    withCredentials: true,
  })
  dispatch({ type: SET_USER, payload: response.data })
}

export const checkAuthUser = () => async (dispatch) => {
  try {
    const response = await axios.post(`${serverPuth}/auth/check`, {
      withCredentials: true,
    })
    dispatch({ type: SET_USER, payload: response.data })
  } catch (err) {
    console.log(err)
  }
}

export const logoutUser = () => async (dispatch) => {
  await axios(`${serverPuth}/user/logout`, {
    withCredentials: true,
  })
  dispatch({ type: SET_USER, payload: null })
}

export const getCharacter = () => async (dispatch) => {
  const response = (await axios.get(`${serverPuth}/users/characterisitics`))
    .data

  dispatch({
    type: GET_USER_CHARACTERISITCS,
    payload: response,
  })
}
