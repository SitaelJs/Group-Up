import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faVk,
} from '@fortawesome/free-brands-svg-icons'
import styles from './styles.module.css'


const Footer = () => {
  return (
  <footer className={styles.wrapper}>
    <h3 className={styles.footerH3}>TagTeam 2021</h3>
    <div className={`${styles.content}`}>
      <FontAwesomeIcon
        className={styles.footerFontAwesome}
        icon={faInstagram}
        size="2x"
      />
      <FontAwesomeIcon
        className={styles.footerFontAwesome}
        icon={faFacebook}
        size="2x"
      />
      <FontAwesomeIcon
        className={styles.footerFontAwesome}
        icon={faVk}
        size="2x"
      />
      <FontAwesomeIcon
        className={styles.footerFontAwesome}
        icon={faTwitch}
        size="2x"
      />
    </div>
  </footer>
)}

export default Footer
