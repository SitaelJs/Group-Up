import { Link } from 'react-router-dom'
import styles from './stylesGroup.module.css'

function Group({ group }) {
  return (
    <div className={styles.groupItem}>
      <Link to={`/groups/${group?.id}`}>
        <h1>{group.name}</h1>
      </Link>

      <h2>game</h2>

      <p>Клеточки по кол-ву игроков в режиме(в пустых - свободные места с)</p>
    </div>
  )
}

export default Group
