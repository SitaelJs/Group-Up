import './style.css'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { getUserFromGoogle, signInUser } from '../../redux/AC/usersAC'

const { REACT_APP_URL_BACK_SERVER } = process.env

function FormAuth() {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' } }
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  })

  const googleSignInClick = () => {
    window.open(`${REACT_APP_URL_BACK_SERVER}/auth/google`, '_self')
    dispatch(getUserFromGoogle(history))
  }

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]))

    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signInUser(payload, history, from))
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>АВТОРИЗАЦИЯ</h1>
        <div>
          <span>E-mail</span>
          <input
            name="email"
            onChange={changeHandler}
            value={userSignIn.email}
          />
        </div>
        <div>
          <span>Пароль</span>
          <input
            name="password"
            onChange={changeHandler}
            value={userSignIn.password}
          />
        </div>
        <button type="submit" value="">
          Отправить
        </button>
        <hr />
      </form>
      <GoogleLoginButton
        className="social-button"
        onClick={googleSignInClick}
      />
    </>
  )
}

export default FormAuth
