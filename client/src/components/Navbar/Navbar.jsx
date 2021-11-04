import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destroyCookie, getUserFromGoogle } from '../../redux/AC/usersAC'
import styles from './stylesHeader.module.css'

function Navbar() {
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserFromGoogle())
  }, [])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <NavLink to="/">
              <span> Group Up</span>
            </NavLink>
          </div>

          {user ? (
            <>
              <div className={styles.mainPages}>
                <NavLink to="/groups">Группы</NavLink>
                <NavLink to="/games">Выбрать игру</NavLink>
              </div>
              <div>
                <button onClick={() => dispatch(destroyCookie())}>Выйти</button>
              </div>
            </>
          ) : (
            <div className={styles.authPages}>
              <NavLink to="/auth/signin">Вход</NavLink>
              <NavLink to="/auth/signup">Регистрация</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
