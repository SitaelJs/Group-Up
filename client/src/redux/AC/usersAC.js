import axios from 'axios'
import {
  CHANGE_GROUP,
  CLEAR_USER,
  GET_ALL_USERS,
  GET_USER_FOR_GROUP,
  SET_USER,
  GET_DATA_FROM_STEAM,
  // GET_ONE_USER,
} from '../types/userTypes'
import { GET_USER_CHARACTERISTICS } from '../types/characterTypes'

const serverPuth = process.env.REACT_APP_URL_BACK_SERVER
const clientPuth = process.env.REACT_APP_URL_FRONT_SERVER

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const clearUser = () => ({
  type: CLEAR_USER,
  payload: null,
})

export const destroyCookie = () => async (dispatch) => {
  const response = await axios(`${serverPuth}/auth/google/logout`, {
    withCredentials: true,
  })
  if (response.status === 200) {
    localStorage.removeItem('user')
    try {
      window.open(`${clientPuth}/`, '_self')
      dispatch(clearUser())
    } catch {
      window.open(`${clientPuth}/`, '_self')
    }
  }
}

export const getUserFromGoogle = () => async (dispatch) => {
  const response = await axios(`${serverPuth}/auth/google/find`, {
    withCredentials: true,
  })

  if (response.status === 200) {
    try {
      const googleUser = await response.data
      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch(setUser(googleUser))
    } catch {
      window.open(`${serverPuth}/auth/google`)
    }
  }
}

export const getAllUsers = () => async (dispatch) => {
  const response = await axios(`${serverPuth}/users`, {
    withCredentials: true,
  })
  const allUsers = await response.data

  dispatch({
    type: GET_ALL_USERS,
    payload: allUsers,
  })
}

// export const getOneUser = () => async (dispatch) => {
//   const response = await axios(`${serverPuth}/users/oneuser/:id`, {
//     withCredentials: true,
//   })
//   const oneUser = await response.data

//   dispatch({
//     type: GET_ONE_USER,
//     payload: oneUser,
//   })
// }

export const getDataFromSteam = (userId) => async (dispatch) => {
  const dataFromSteam = (
    await axios(`${serverPuth}/auth/steam/userinfo/${userId}`, {
      withCredentials: true,
    })
  ).data
  localStorage.setItem('steam', JSON.stringify(dataFromSteam))
  dispatch({
    type: GET_DATA_FROM_STEAM,
    payload: dataFromSteam,
  })
}

export const getUsersForGroup = (groupId) => async (dispatch) => {
  const usersForGroup = (
    await axios(`${serverPuth}/groups/${groupId}`, {
      withCredentials: true,
    })
  ).data
  dispatch({
    type: GET_USER_FOR_GROUP,
    payload: usersForGroup,
  })
}

export const changeGroupForUser = (userId, groupId) => async (dispatch) => {
  await axios.post(
    `${serverPuth}/groups/${groupId}`,
    { userId },
    {
      withCredentials: true,
    }
  )
  dispatch({
    type: CHANGE_GROUP,
    payload: {
      userId,
      groupId,
    },
  })
  const usersForGroup = await axios.get(`${serverPuth}/groups/${groupId}`)
  const data = await usersForGroup.data
  dispatch({
    type: GET_USER_FOR_GROUP,
    payload: data,
  })
}

export const signUpUser = (payload, history) => async (dispatch) => {
  const response = await axios.post(`${serverPuth}/auth/signup`, payload, {
    withCredentials: true,
  })
  if (response.status === 200) {
    const user = await response.data
    localStorage.setItem('user', JSON.stringify(response.data))
    dispatch(setUser(user))
    history.replace('/')
  } else {
    history.replace('/signup')
  }
}

export const signInUser = (payload, history, from) => async (dispatch) => {
  const response = await axios.post(`${serverPuth}/auth/signin`, payload, {
    withCredentials: true,
  })
  if (response.status === 200) {
    const user = await response.data
    localStorage.setItem('user', JSON.stringify(response.data))
    dispatch(setUser(user))
    history.replace(from)
  } else {
    history.replace('/signin')
  }
}

export const checkAuthUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${serverPuth}/auth/check`, {
      withCredentials: true,
    })
    if (response.status === 200) {
      const user = await response.data
      dispatch(setUser(user))
    }
  } catch (err) {
    console.log(err)
  }
}

export const logoutUser = () => async (dispatch) => {
  const response = await axios(`${serverPuth}/user/logout`, {
    withCredentials: true,
  })
  if (response.status === 200) {
    dispatch({ type: SET_USER, payload: null })
  }
}

export const getCharacter = () => async (dispatch) => {
  const response = (
    await axios.get(`${serverPuth}/users/characterisitics`, {
      withCredentials: true,
    })
  ).data

  dispatch({
    type: GET_USER_CHARACTERISTICS,
    payload: response,
  })
}

