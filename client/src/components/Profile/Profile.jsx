/* eslint-disable jsx-a11y/label-has-associated-control */
import './profile.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getCharacter } from '../../redux/AC/characterAC'

function Profile() {
  const { userId } = useParams()
  const users = useSelector((state) => state.users)
  const user = users?.find((el) => el.id === Number(userId))
  console.log(userId)
  console.log(user)
  const character = useSelector((state) => state.characterisitics)
  const charac = character?.find((el) => el.id === Number(userId))
  console.log('----->', charac)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacter())
  }, [])

  // useEffect(() => {
  //   axios('http://localhost:3001/users/characterisitics')
  //     .then((dataFromServer) => dispatch(getCharacter(dataFromServer.data)))
  // }, [])
  // console.log(users)

  // const increment = () => {

  // }

  // const decrement = () => {

  // }

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
          <h4>{charac?.toxic}</h4>
          <h4>{charac?.friendly}</h4>
          <h4>{charac?.teamPlayer}</h4>
          <h4>{charac?.strategy}</h4>
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
