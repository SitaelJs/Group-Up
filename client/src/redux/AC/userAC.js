import axios from 'axios'
import { SET_USER } from '../types/userTypes'

const serverPuth = process.env.REACT_APP_URL_BACK_SERVER

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
