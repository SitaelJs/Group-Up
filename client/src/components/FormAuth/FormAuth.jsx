import './style.css'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { signUpUser } from '../../redux/AC/usersAC'

const { REACT_APP_URL_BACK_SERVER } = process.env

function FormAuth() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({ email: '', password: '', nickname: '' })

  const googleSignInClick = () => {
    window.open(`${REACT_APP_URL_BACK_SERVER}/auth/google`, '_self')
  }

  const user = useSelector((state) => state.auth)
  console.log('ЭТО ЮЗЕР =====>', user)

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let payload = Object.entries(form).filter((el) => (el[1] ? el[1].trim() : el[1]))
    console.log(payload)

    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signUpUser(payload, history))
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>РЕГИСТРАЦИЯ</h1>
        <div>
          <span>Логин</span>
          <input
            name="nickname"
            onChange={changeHandler}
            value={form.nickname}
          />
        </div>
        <div>
          <span>E-mail</span>
          <input name="email" onChange={changeHandler} value={form.email} />
        </div>
        <div>
          <span>Пароль</span>
          <input
            name="password"
            onChange={changeHandler}
            value={form.password}
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
