import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Game from '../Game/Game'
import getAllGames from '../../redux/AC/gamesAC'
import styles from './styles.module.css'

export default function GameList() {
  const dispatch = useDispatch()

  const allGames = useSelector((state) => state.games)

  useEffect(() => {
    dispatch(getAllGames())
  }, [])

  return (
    <div className={styles.gamelist}>
      {allGames?.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  )
}
