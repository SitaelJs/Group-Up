import { Link } from 'react-router-dom'
import styles from './stylesProfItem.module.css'

function Profileitem({ user }) {
  const ava = `${process.env.PUBLIC_URL}/media/ava.png`

  return (
    <div className={styles.profContainer}>
      <div className={styles.avaProf}>
        <img alt="" src={ava} />
      </div>
      <Link to={`/users/${user.id}`}>
        <span>{user.nickname}</span>
      </Link>
    </div>
  )
}

export default Profileitem
