/* eslint-disable react/button-has-type */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { destroyCookie, getUserFromGoogle } from '../../redux/AC/usersAC'
// import { useHistory } from 'react-router'
import styles from './styles.module.css'

const Navbar = () => {
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  // const history = useHistory()

  // const logoutHandler = () => {
  //   dispatch(logoutUser())
  //   history.push('/')
  // }

  useEffect(() => {
    dispatch(getUserFromGoogle())
  }, [])

  console.log('render header')
  return (
    <header>
      <h1 className={styles.h1}>
        <Link className={styles.link} to="/">
          Group Up!
        </Link>
      </h1>
      {/* <img
      className={styles.logo}
      src="https://marineinsurer.co.uk/wp-content/uploads/2020/05/logo-dummy.png"
      alt="logo"
    /> */}

      <nav>
        <ul className={styles.navLinks}>
          {user ? (
            <>
              <li className={styles.li}>
                <Link className={styles.navLinksForEntry} to="/games">
                  Games
                </Link>
              </li>
              <li className={styles.li}>
                <button
                  // className={styles.navLinksForEntry}
                  onClick={() => dispatch(destroyCookie())}
                >
                  Выйти
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={styles.li}>
                <Link className={styles.navLinksForEntry} to="/auth/signin">
                  Вход
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.navLinksForEntry} to="/auth/signup">
                  Регистрация
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
