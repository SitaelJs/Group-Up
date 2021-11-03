import axios from 'axios'
import {
	CHANGE_GROUP,
	GET_ALL_USERS,
	GET_USER_FOR_GROUP,

} from '../types/userTypes'

export const getAllUsers = () => async (dispatch) => {
	const allUsers = (await axios('http://localhost:3001/users'))
	const data = await allUsers.data
	dispatch({
		type: GET_ALL_USERS,
		payload: allUsers,
	})
}

export const setUser = (data) => ({
	type: GET_ALL_USERS,
	payload: data
})


export const getUsersForGroup = (groupId) => async (dispatch) => {
	const usersForGroup = await axios.get(`http://localhost:3001/groups/${groupId}`)
	const data = await usersForGroup.data
	dispatch({
		type: GET_USER_FOR_GROUP,
		payload: data,
	})
}
