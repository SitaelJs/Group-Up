import { NavLink } from 'react-router-dom'
import styles from './stylesHeader.module.css'

const Navbar = () => (
  <header className={styles.header}>
    {/* <div className="content-wrapper"> */}
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <span> Group Up</span>
          </NavLink>
        </div>
        <div className={styles.mainPages}>
          <NavLink to="/groups">Группы</NavLink>
          <NavLink to="/games">Выбрать игру</NavLink>
        </div>

        <div className={styles.authPages}>
          <NavLink to="/auth/signin">Вход</NavLink>
          <NavLink to="/auth/signup">Регистрация</NavLink>
        </div>
      </div>
    </nav>
    {/* </div> */}
  </header>
)

export default Navbar
