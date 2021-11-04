import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faVk,
} from '@fortawesome/free-brands-svg-icons'
import styles from './footerStyles.module.css'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tag}>
        <span>Lynxses 2021</span>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faInstagram} size="1x" />

          <FontAwesomeIcon icon={faFacebook} size="1x" />

          <FontAwesomeIcon icon={faVk} size="1x" />

          <FontAwesomeIcon icon={faTwitch} size="1x" />
        </div>
      </div>
    </div>
  )
}

export default Footer
