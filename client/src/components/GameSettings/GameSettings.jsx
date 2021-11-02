import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import getAllGames from '../../redux/AC/gamesAC'
import styles from './style.module.css'
import getGameMode from '../../redux/AC/gamemodeAC'
import { addNewGroup, getAllGroups } from '../../redux/AC/groupsAC'

function GameSettings() {
  const { gamesId } = useParams()

  const dispatch = useDispatch()
  const history = useHistory()

  const allGames = useSelector((state) => state.games)
  const gameSettings = useSelector((state) => state.gameMode)
  const allGroups = useSelector((state) => state.groups)

  const game = allGames.find((el) => el.id === Number(gamesId))
  const gamePic = `${process.env.PUBLIC_URL}/media/gamesPicDetail/gameId=${game?.id}Detail.jpeg`

  useEffect(() => {
    dispatch(getAllGames())
    dispatch(getAllGroups())

    if (game) {
      dispatch(getGameMode(game.id))
    }
  }, [game?.id])

  const findGroupHandler = (e) => {
    e.preventDefault()
    history.push('/groups')
  }

  const createGroupHandler = (e) => {
    e.preventDefault()
    if (gameSettings) {
      const newGroup = {
        gameId: game.id,
        modeId: +e.target.modeId.value,
        positionId: +e.target.positionId.value,
      }
      dispatch(addNewGroup(newGroup))
      const params = allGroups[allGroups.length - 1].id
      const paramsForCurGame = params + 1
      history.push(`/groups/${paramsForCurGame}`)
    }
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.personPhoto}
        alt=""
        // style={{ width: 200 }}
        src={gamePic}
      />

      <div>
        <span>
          <h1>{game?.title}</h1>
        </span>
      </div>
      <div>
        <p>
          <span>ВЫБОР РЕЖИМА</span>
          <form onSubmit={createGroupHandler}>
            <select name="modeId">
              {gameSettings?.modes?.map((mode) => (
                <option key={mode.id} value={mode?.id}>
                  {mode?.name}
                </option>
              ))}
            </select>
            <br />
            <span>ВЫБРАТЬ РОЛЬ</span>
            <select name="positionId">
              {gameSettings?.positions?.map((position) => (
                <option key={position.id} value={position?.id}>
                  {position?.name}
                </option>
              ))}
            </select>
            <br />
            <button type="button" onClick={findGroupHandler}>
              найти группу
            </button>
            <br />
            <button type="submit">создать группу</button>
          </form>
        </p>
      </div>
      {/* <hr /> */}
    </div>
  )
}

export default GameSettings
