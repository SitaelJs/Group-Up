import { Link } from 'react-router-dom'

function Game({ game }) {
  const gamePicUrl = `${process.env.PUBLIC_URL}/media/gamesPicGeneral/gameId=${game.id}General.jpeg`
  return (
    <div>
      <p>
        <span>{game.title}</span>
      </p>
      <Link to={`/games/${game.id}`}>
        <img alt="" style={{ width: 400 }} src={gamePicUrl} />
      </Link>
    </div>
  )
}

export default Game
