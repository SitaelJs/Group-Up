import { Link } from 'react-router-dom'
import GameSettings from '../GameSettings/GameSettings'

function Game({ game }) {
  return (
    <Link to={`/games/:${game.id}`} component={<GameSettings test="test" />}>
      <div>
        <p>
          <span>{game.title}</span>
        </p>
        <img
          alt=""
          style={{ width: 400 }}
          src={`../../../public/gamesImgs/gameId=${game.id}General.jpeg`}
        />
      </div>
    </Link>
  )
}

export default Game
