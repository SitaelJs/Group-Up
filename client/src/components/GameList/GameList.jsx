import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Game from '../Game/Game'
import getAllGames from '../../redux/AC/gamesAC'

export default function GameList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGames())
  }, [])

  const allGames = useSelector((state) => state.games)
  return (
    <div>
      {allGames?.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  )
}
