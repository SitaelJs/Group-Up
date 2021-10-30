import { useSelector } from 'react-redux'
import Game from '../Game/Game'

function GameList() {
  const allGames = useSelector((state) => state.games)

  return (
    <div>
      {allGames.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  )
}

export default GameList
