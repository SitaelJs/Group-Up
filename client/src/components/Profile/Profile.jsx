/* eslint-disable jsx-a11y/label-has-associated-control */
import './profile.css'
import {
	getCharacter, postDecrement, postIncrement
} from '../../redux/AC/characterAC'
import {getAllUsers} from '../../redux/AC/usersAC'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'


function Profile() {

	const {userId} = useParams()
	const users = useSelector((state) => state.users)
	const user = users?.find((el) => el.id === Number(userId))
	const character = useSelector((state) => state.characterisitics)
	const charac = character?.find((el) => el.toUserId === Number(userId))
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCharacter())
	}, [])

	// const increment = () => {
	// }

	useEffect(() => {
		dispatch(getAllUsers())
	}, [])

	const incrementValue = (e, char) => {
		e.preventDefault()
		console.log(char)
		dispatch(postIncrement(userId, char, charac))
	}

	const decrementValue = (e, char) => {
		e.preventDefault()
		console.log(char)
		dispatch(postDecrement(userId, char, charac))
	}

	return (
		// <Link to="/user/:userId">
		<div>
			<img
				className="profImg"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qI-Sj1lQI3HVbdlSGtLNryKwc2iN8lkogw&usqp=CAU"
				alt="userpic"
			/>
			<h4 className="text">{user?.nickname}</h4>
			<h4 className="text">{user?.email}</h4>
			<h4 className="text">{user?.info}</h4>
			<ul>User Stats</ul>

			<img className="profImg"
			     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qI-Sj1lQI3HVbdlSGtLNryKwc2iN8lkogw&usqp=CAU"
			     alt="userpic"/>
			<h4 className="text">{user?.nickname}</h4>
			<h4 className="text">{user?.email}</h4>
			<h4 className="text">{user?.info}</h4>
			<h4 className="text">{user?.age}</h4>
			<ul>User Stats</ul>
			<h4>{charac?.toxic}</h4>
			<button value="toxic" onClick={(e) => incrementValue(e, 'toxic')} type="button">Add
			</button>
			<button name="toxic" onClick={(e) => decrementValue(e, 'toxic')} type="button">Minus
			</button>

			<h4>{charac?.friendly}</h4>
			<button onClick={(e) => incrementValue(e, 'friendly')} type="button">Add</button>
			<button onClick={(e) => decrementValue(e, 'friendly')} type="button">Minus</button>
			<h4>{charac?.teamPlayer}</h4>
			<button onClick={(e) => incrementValue(e, 'teamPlayer')} type="button">Add</button>
			<button onClick={(e) => decrementValue(e, 'teamPlayer')} type="button">Minus</button>
			<h4>{charac?.strategy}</h4>
			<button onClick={(e) => incrementValue(e, 'strategy')} type="button">Add</button>
			<button onClick={(e) => decrementValue(e, 'strategy')} type="button">Minus</button>
			<h4>{charac?.leader}</h4>
			<button onClick={(e) => incrementValue(e, 'leader')} type="button">Add</button>
			<button onClick={(e) => decrementValue(e, 'leader')} type="button">Minus</button>
		</div>
	)

}


export default Profile
