import styles from './styles.module.css'
import Chat from '../Chat/Chat'

const Main = () => (
  <div>
    <img
      className={styles.wrapper}
      src="https://www.enjpg.com/img/2020/valorant.png"
      alt="wrapper"
    />
    <Chat />
  </div>
)

export default Main
