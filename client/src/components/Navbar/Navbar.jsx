import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Navbar = () => (
  <header>
    <h1 className={styles.h1}><Link className={styles.link} to="/">Group Up!</Link></h1>
    {/* <img
      className={styles.logo}
      src="https://marineinsurer.co.uk/wp-content/uploads/2020/05/logo-dummy.png"
      alt="logo"
    /> */}
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.li}>
          <Link className={styles.navLinksForEntry} to="/games">
            Games
          </Link>
        </li>
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
      </ul>
    </nav>
  </header>
)

export default Navbar
