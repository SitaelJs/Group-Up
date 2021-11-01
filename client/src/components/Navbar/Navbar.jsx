import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./styles.module.css"

const Navbar = () => (
	<header>
		<img
			className={styles.logo}
			src="https://marineinsurer.co.uk/wp-content/uploads/2020/05/logo-dummy.png"
			alt="logo"
		/>
		<nav>
			<ul className={styles.navLinks}>
				<li className={styles.li}>
					<Link className={styles.navLinksForEntry} to="/games">
						Games
					</Link>
				</li>
				<li className={styles.li}>
					<Link className={styles.navLinksForEntry} to="/signin">
						Вход
					</Link>
				</li>
				<li className={styles.li}>
					<Link className={styles.navLinksForEntry} to="/signup">
						Регистрация
					</Link>
				</li>
				{/* logout when user is auth */}
			</ul>
		</nav>
	</header>
)
}

export default Navbar
