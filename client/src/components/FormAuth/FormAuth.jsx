/* eslint-disable jsx-a11y/label-has-associated-control */
// import './style.css'
import './loginstyle.css'

function FormAuth() {
  return (
    <div className="container">
      <form>
        <div className="form-inner">
          <h2>АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ</h2>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Повторите пароль</label>
            <input type="password" name="password" id="password" />
          </div>
          <input type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  // <div>
  //   <h1>АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ</h1>
  //   <div>
  //     <span>Логин</span>
  //     <input />
  //   </div>
  //   <div>
  //     <span>E-mail</span>
  //     <input />
  //   </div>
  //   <div>
  //     <span>Пароль</span>
  //     <input />
  //   </div>
  //   <div>
  //     <span>Повторите пароль</span>
  //     <input />
  //   </div>
  //   <button type="submit" value="">Отправить</button>
  //   <hr />
  // </div>
  )
}

export default FormAuth
