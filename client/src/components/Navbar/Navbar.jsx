import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from './stylesHeader.module.css'
import { destroyCookie } from '../../redux/AC/usersAC'

function Navbar() {
  const user = useSelector((state) => state.auth)
  console.log(user)
  const dispatch = useDispatch()

  const destroyHandler = () => {
    dispatch(destroyCookie())
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span> Group Up</span>
          </NavLink>
        </div>

        {user ? (
          <div className={styles.navLinkMain}>
            <NavLink to="/users">Игроки</NavLink>
            <NavLink to="/groups">Группы</NavLink>
            <NavLink to="/games">Выбрать игру</NavLink>
            <button type="button" onClick={() => destroyHandler}>
              Выйти
            </button>
          </div>
        ) : (
          <div className={styles.navLinkMain}>
            <NavLink to="/auth/signin">Вход</NavLink>
            <NavLink to="/auth/signup">Регистрация</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
