/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Link } from 'react-router-dom'
import styles from './stylesGame.module.css'

function Game({ game }) {
  const gamePicUrl = `${process.env.PUBLIC_URL}/media/gamesPicGeneral/gameId=${game.id}General.jpeg`

  const focusHandler = (e) => {
    e.target.style.filter = 'grayscale(0)'
    e.target.style['box-shadow'] = '0px 0px 20px rgba(255, 255, 255, 0.15)'
  }

  const unFocusHandler = (e) => {
    e.target.style.filter = 'grayscale(100%)'
    e.target.style['box-shadow'] = 'none'
  }

  return (
    <div>
      <div className={styles.game}>
        <Link to={`/games/${game.id}`}>
          <img
            onMouseOver={focusHandler}
            onMouseOut={unFocusHandler}
            style={{ filter: 'grayscale(100%)' }}
            alt=""
            src={gamePicUrl}
          />
        </Link>
        <b>{game?.title}</b>
      </div>
    </div>
  )
}

export default Game
