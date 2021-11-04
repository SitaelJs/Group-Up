import { GoogleLoginButton } from 'react-social-login-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { getUserFromGoogle, signUpUser } from '../../redux/AC/usersAC'
import styles from './stylesAuth.module.css'

const { REACT_APP_URL_BACK_SERVER } = process.env

function FormAuth() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({ email: '', password: '', nickname: '' })

  const googleSignInClick = () => {
    window.open(`${REACT_APP_URL_BACK_SERVER}/auth/google`, '_self')
    dispatch(getUserFromGoogle(history))
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
    <div className={styles.formForAuth}>
      <form name="authForm" onSubmit={submitHandler}>
        <p className={styles.headAuth}>Заполните форму</p>

        <div className={styles.inputAuth}>
          <p>Логин</p>

          <input
            placeholder="nickname"
            name="nickname"
            onChange={changeHandler}
            value={form.nickname}
          />

          <p>E-mail</p>
          <input
            type="email"
            placeholder="example@mail.com"
            name="email"
            onChange={changeHandler}
            value={form.email}
          />

          <p>Пароль</p>
          <input
            type="password"
            placeholder="a-Z 0-9 !@#"
            name="password"
            onChange={changeHandler}
            value={form.password}
          />
        </div>

        <p className={styles.buttonSendAuth}>
          <button type="button" value="">
            Отп
            <b className={styles.first}>равит</b>
            ь
          </button>
        </p>

      </form>
      <GoogleLoginButton
        className={styles.socialButton}
        onClick={googleSignInClick}
      />
    </div>
  )
}

export default FormAuth
