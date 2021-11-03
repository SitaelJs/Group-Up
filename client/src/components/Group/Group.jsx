import { Link } from 'react-router-dom'
import styles from './stylesGroup.module.css'

function Group({ group }) {
  return (
    <div className={styles.groupItem}>
      <Link to={`/groups/${group?.id}`}>
        <h1 className={styles.groupName}>{group.name}</h1>
        <p>game</p>

        <p>
          Клеточки по кол-ву игроков в режиме(в пустых - свободные места с
          `&quot;`)
        </p>
      </Link>
    </div>
  )
}

export default Group
