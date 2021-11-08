import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
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

        <div className={styles.discordIcon} />
        <div className={styles.icons}>
          <a href="https://discord.gg/Q3c42AmKts">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a href="https://www.instagram.com/elbrus.bootcamp/">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <FontAwesomeIcon icon={faFacebook} size="1x" />
          <a href="https://elbrusboot.camp/">
            <FontAwesomeIcon icon={faVk} size="1x" />
          </a>

          <FontAwesomeIcon icon={faTwitch} size="1x" />
        </div>
      </div>
    </div>
  )
}

export default Footer
