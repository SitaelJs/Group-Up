import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram, faFacebook, faVk, faTwitch
} from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <h3 className={styles.footerH3}>TagTeam 2021</h3>
    <div className={styles.footerIcons}>
      <FontAwesomeIcon className={styles.footerFontAwesome} icon={faInstagram} size="2x" />
      <FontAwesomeIcon className={styles.footerFontAwesome} icon={faFacebook} size="2x" />
      <FontAwesomeIcon className={styles.footerFontAwesome} icon={faVk} size="2x" />
      <FontAwesomeIcon className={styles.footerFontAwesome} icon={faTwitch} size="2x" />
    </div>
  </footer>
)

export default Footer
