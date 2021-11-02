import './style.css'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { signUpUser } from '../../redux/AC/usersAC'

const { URL_BACK_SERVER } = process.env

function FormAuth() {
  const googleSignInClick = () => {
    window.open(`${URL_BACK_SERVER}/auth/google`, '_self')
  }

  const dispatch = useDispatch()

  const [form, setForm] = useState({})
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signUpUser(form))
  }

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user])

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>РЕГИСТРАЦИЯ</h1>
        <div>
          <span>Логин</span>
          <input name="nickname" onChange={changeHandler} />
        </div>
        <div>
          <span>E-mail</span>
          <input name="email" onChange={changeHandler} />
        </div>
        <div>
          <span>Пароль</span>
          <input name="password" onChange={changeHandler} />
        </div>
        <div>
          <span>Повторите пароль</span>
          <input />
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
