import './style.css'
import { GoogleLoginButton } from 'react-social-login-buttons'

function FormAuth() {
  const googleSignInClick = () => {
    window.open('http://localhost:3001/auth/google', '_self')
  }
  return (
    <>
      <div>
        <h1>АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ</h1>
        <div>
          <span>Логин</span>
          <input />
        </div>
        <div>
          <span>E-mail</span>
          <input />
        </div>
        <div>
          <span>Пароль</span>
          <input />
        </div>
        <div>
          <span>Повторите пароль</span>
          <input />
        </div>
        <button type="submit" value="">
          Отправить
        </button>
        <hr />
      </div>
      <GoogleLoginButton
        className="social-button"
        onClick={() => googleSignInClick}
      />
    </>
  )
}

export default FormAuth
