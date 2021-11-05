import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './stylesGroup.module.css'

function Group({ group }) {
  const allGames = useSelector((state) => state.games)
  const game = allGames.find((item) => item.id === group.gameId)

  return (
    <div className={styles.groupItem}>
      <Link to={`/groups/${group?.id}`}>
        <h1>{group?.name}</h1>
      </Link>

      <h2>{game?.title}</h2>

      <p>Lorem ipsum</p>
    </div>
  )
}

export default Group
