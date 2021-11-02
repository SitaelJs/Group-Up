import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Game({ game }) {
  const gamePicUrl = `${process.env.PUBLIC_URL}/media/gamesPicGeneral/gameId=${game.id}General.jpeg`
  return (
    <div className={styles.game}>
      <div className={styles.wrapper}>
        <p>
          <span>{game.title}</span>
        </p>
        <Link to={`/games/${game.id}`}>
          <img className={styles.img} alt="" src={gamePicUrl} />
        </Link>
      </div>
    </div>
  )
}
// style={{ width: 400 }}
export default Game
