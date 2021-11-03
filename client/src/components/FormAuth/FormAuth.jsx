import { GoogleLoginButton } from 'react-social-login-buttons'
import styles from './stylesAuth.module.css'

function FormAuth() {
  const googleSignInClick = () => {
    window.open('http://localhost:3001/auth/google', '_self')
  }

  return (
    <div className={styles.formForAuth}>
      <p className={styles.headAuth}>Заполните форму</p>

      <div className={styles.inputAuth}>
        <p>Логин</p>
        <input placeholder="nickname" />

        <p>E-mail</p>
        <input type="email" placeholder="example@mail.com" />

        <p>Пароль</p>
        <input type="password" placeholder="a-Z 0-9 !@#" />

        <p>Повторите пароль</p>
        <input type="password" placeholder="a-Z 0-9 !@#" />
      </div>

      <p className={styles.buttonSendAuth}>
        <span type="submit" value="">
          Отп<b className={styles.first}>равит</b>ь
        </span>
      </p>
      <GoogleLoginButton
        className={styles.socialButton}
        onClick={googleSignInClick}
      />
    </div>
  )
}

export default FormAuth
