/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './profile.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import {
  getCharacter, addToxic, minusToxic, addFriendly, minusFriendly, addTeamPlay, minusTeamPlay, addStrategy, minusStrategy, addLeader, minusLeader
} from '../../redux/AC/characterAC'

function Profile() {
  const { userId } = useParams()
  const users = useSelector((state) => state.users)
  const user = users?.find((el) => el.id === Number(userId))
  console.log(userId)
  console.log(user)
  // const { userId } = useParams()
  const character = useSelector((state) => state.characterisitics)
  const charac = character?.find((el) => el.toUserId === Number(userId))
  console.log('----->', charac)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacter())
  }, [user])

  // useEffect(() => {
  //   axios('http://localhost:3001/users/characterisitics')
  //     .then((dataFromServer) => dispatch(getCharacter(dataFromServer.data)))
  // }, [])
  // console.log(users)

  const incrementTox = (e) => {
    e.preventDefault()
    console.log('in', userId)
    dispatch(addToxic(userId))
  }

  const incrementFriendly = (e) => {
    e.preventDefault()
    dispatch(addFriendly(userId))
  }

  const incrementTeamPlay = (e) => {
    e.preventDefault()
    dispatch(addTeamPlay(userId))
  }

  const incrementStrategy = (e) => {
    e.preventDefault()
    dispatch(addStrategy(userId))
  }

  const incrementLeader = (e) => {
    e.preventDefault()
    dispatch(addLeader(userId))
  }

  const decrementTox = (e) => {
    e.preventDefault()
    dispatch(minusToxic(userId))
  }

  const decrementFriendly = (e) => {
    e.preventDefault()
    dispatch(minusFriendly(userId))
  }

  const decrementTeamPlay = (e) => {
    e.preventDefault()
    dispatch(minusTeamPlay(userId))
  }
  const decrementStrategy = (e) => {
    e.preventDefault()
    dispatch(minusStrategy(userId))
  }
  const decrementLeader = (e) => {
    e.preventDefault()
    dispatch(minusLeader(userId))
  }

  return (
    <Link to="/user/:userId">
      <div className="container">

        <div className="wrapper">
          <div className="img-wrapper">
            <img className="profImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qI-Sj1lQI3HVbdlSGtLNryKwc2iN8lkogw&usqp=CAU" alt="userpic" />
          </div>
          {/* {user && charac} */}
          <div className="userInfo">
            <h4 className="text">{user?.nickname}</h4>
            <h4 className="text">{user?.email}</h4>
            <h4 className="text">{user?.info}</h4>
            <h4 className="text">{user?.age}</h4>
          </div>
          <ul>User Stats</ul>
          <div>
            <h4>{charac?.toxic}</h4>
            <button value="toxicPlus" onClick={(e) => incrementTox(e)} type="button">Add</button>
            <button name="toxicMinus" onClick={(e) => decrementTox(e)} type="button">Minus</button>
          </div>

          <h4>{charac?.friendly}</h4>
          <button onClick={(e) => incrementFriendly(e)} type="button">Add</button>
          <button onClick={(e) => decrementFriendly(e)} type="button">Minus</button>
          <h4>{charac?.teamPlayer}</h4>
          <button onClick={(e) => incrementTeamPlay(e)} type="button">Add</button>
          <button onClick={(e) => decrementTeamPlay(e)} type="button">Minus</button>
          <h4>{charac?.strategy}</h4>
          <button onClick={(e) => incrementStrategy(e)} type="button">Add</button>
          <button onClick={(e) => decrementStrategy(e)} type="button">Minus</button>
          <h4>{charac?.leader}</h4>
          <button onClick={(e) => incrementLeader(e)} type="button">Add</button>
          <button onClick={(e) => decrementLeader(e)} type="button">Minus</button>
          {/* <div className="stat-area">
            <label htmlFor="">
              <div className="row">
                <div className="column">
                  <span className="text">Toxic</span>

                </div>
                <button onClick={increment} type="submit">+</button>
                <button onClick={decrement} type="submit">-</button>
                <span className="percent"><h4>{character.toxic}</h4></span>
              </div>
              <div className="progress" />
            </label>
            <label htmlFor="">
              <div className="row">
                <div className="column">
                  <span className="text">Friendly</span>
                </div>
                <span className="percent">60%</span>
              </div>
              <div className="progress" />
            </label>
            <label htmlFor="">
              <div className="row">
                <div className="column">
                  <span className="text">Team player</span>
                </div>
                <span className="percent">10%</span>
              </div>
              <div className="progress" />
            </label>
            <label htmlFor="">
              <div className="row">
                <div className="column">
                  <span className="text">Leader</span>
                </div>
                <span className="percent">80%</span>
              </div>
              <div className="progress" />
            </label>
            <label htmlFor="">
              <div className="row">
                <div className="column">
                  <span className="text">Strategist</span>
                </div>
                <span className="percent">50%</span>
              </div>
              <div className="progress" />
            </label>
          </div> */}
        </div>

      </div>
    </Link>
  )
}

export default Profile
