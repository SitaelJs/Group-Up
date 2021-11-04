/* eslint-disable jsx-a11y/label-has-associated-control */
import './profile.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  // checkAuthUser,
  getAllUsers,
  // getUserFromGoogle,
} from '../../redux/AC/usersAC'
import {
  getCharacter,
  postDecrement,
  postIncrement,
} from '../../redux/AC/characterAC'

function Profile() {
  const [disable, setDisable] = useState(false)
  const [disable2, setDisable2] = useState(false)
  const [disable3, setDisable3] = useState(false)
  const [disable4, setDisable4] = useState(false)
  const [disable1, setDisable1] = useState(false)

  const { userId } = useParams()
  const users = useSelector((state) => state.users)
  const user = users?.find((el) => el.id === Number(userId))
  const character = useSelector((state) => state.characterisitics)

  const charac = character?.find((el) => el.toUserId === Number(userId))
  const { REACT_APP_URL_BACK_SERVER } = process.env
  const steamIco = `${process.env.PUBLIC_URL}/media/icons/steam_47012.png`
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacter())
    dispatch(getAllUsers())
    // dispatch(getUserFromGoogle())
    // dispatch(checkAuthUser())
  }, [])

  // useEffect(() => {
  // }, [])

  const incrementValue = (e, char) => {
    e.preventDefault()
    console.log(char)
    dispatch(postIncrement(userId, char, charac, auth))
  }

  const decrementValue = (e, char) => {
    e.preventDefault()
    console.log(char)
    dispatch(postDecrement(userId, char, charac, auth))
  }
  const steamSignInClick = (e) => {
    e.preventDefault()
    window.open(`${REACT_APP_URL_BACK_SERVER}/auth/steam`, '_self')
  }
  console.log('ЭТО ОН ===>', auth)
  const steamLocalUser = JSON.parse(localStorage.getItem('user'))
  console.log(steamLocalUser, 3333333333222)
  return (
    <div>
      {/* <img
        className="profImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qI-Sj1lQI3HVbdlSGtLNryKwc2iN8lkogw&usqp=CAU"
        alt="userpic"
      /> */}
      <h4 className="text">{user?.nickname}</h4>
      <h4 className="text">{user?.email}</h4>
      <h4 className="text">{user?.info}</h4>
      {steamLocalUser.steamID !== '0' ? (
        <div>
          <img src={steamIco} alt="steam" />
        </div>
      ) : (
        <div>
          <button type="button" onClick={(e) => steamSignInClick(e)}>
            Steam
          </button>
        </div>
      )}
      <ul>User Stats</ul>

      <img className="profImg" src={user?.photo} alt="userpic" />
      <h4 className="text">{user?.nickname}</h4>
      <h4 className="text">{user?.email}</h4>
      <h4 className="text">{user?.info}</h4>
      <h4 className="text">{user?.age}</h4>
      <ul>User Stats</ul>
      <h4>{charac?.toxic}</h4>
      <button
        value="toxic"
        onClick={(e) => {
          setDisable(true)
          incrementValue(e, 'toxic')
        }}
        type="button"
        disabled={disable}
      >
        Add
      </button>
      <button
        name="toxic"
        onClick={(e) => {
          setDisable(true)
          decrementValue(e, 'toxic')
        }}
        type="button"
        disabled={disable}
      >
        Minus
      </button>

      <h4>{charac?.friendly}</h4>
      <button
        onClick={(e) => {
          setDisable1(true)
          incrementValue(e, 'friendly')
        }}
        disabled={disable1}
        type="button"
      >
        Add
      </button>
      <button
        onClick={(e) => {
          setDisable1(true)
          decrementValue(e, 'friendly')
        }}
        disabled={disable1}
        type="button"
      >
        Minus
      </button>
      <h4>{charac?.teamPlayer}</h4>
      <button
        onClick={(e) => {
          setDisable2(true)
          incrementValue(e, 'teamPlayer')
        }}
        disabled={disable2}
        type="button"
      >
        Add
      </button>
      <button
        onClick={(e) => {
          setDisable2(true)
          decrementValue(e, 'teamPlayer')
        }}
        disabled={disable2}
        type="button"
      >
        Minus
      </button>
      <h4>{charac?.strategy}</h4>
      <button
        onClick={(e) => {
          setDisable3(true)
          incrementValue(e, 'strategy')
        }}
        disabled={disable3}
        type="button"
      >
        Add
      </button>
      <button
        disabled={disable3}
        onClick={(e) => {
          setDisable3(true)
          decrementValue(e, 'strategy')
        }}
        type="button"
      >
        Minus
      </button>
      <h4>{charac?.leader}</h4>
      <button
        onClick={(e) => {
          setDisable4(true)
          incrementValue(e, 'leader')
        }}
        disabled={disable4}
        type="button"
      >
        Add
      </button>
      <button
        onClick={(e) => {
          setDisable4(true)
          decrementValue(e, 'leader')
        }}
        disabled={disable4}
        type="button"
      >
        Minus
      </button>
    </div>
  )
}

export default Profile
