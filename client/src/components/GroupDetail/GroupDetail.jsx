import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ChatGroup from '../ChatGroup/ChatGroup'
import { getAllGroups } from '../../redux/AC/groupsAC'
import getAllGames from '../../redux/AC/gamesAC'
import getAllModes from '../../redux/AC/modesAC'

function GroupDetail() {
  const { groupsId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGroups())
    dispatch(getAllGames())
    dispatch(getAllModes())
  }, [])

  const allGroups = useSelector((state) => state.groups)
  const allGames = useSelector((state) => state.games)
  const allModes = useSelector((state) => state.modes)
  const group = allGroups?.find((el) => el.id === +groupsId)
  const game = allGames?.find((el) => el.id === group?.gameId)
  const curModes = allModes?.find((el) => el.id === group?.modeId)

  const gamePic = `${process.env.PUBLIC_URL}/media/gamesPicGroups/gameId=${group?.gameId}ForGroups.png`

  return (
    <div>
      <h1>{game?.title}</h1>
      <img alt="" style={{ width: 200 }} src={gamePic} />
      <h3>
        Режим игры:
        {curModes?.name}
      </h3>
      <ul>
        <li>
          Игрок 1
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 2
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 3
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 4
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
        <li>
          Игрок 5
          <p>Роль игрока</p>
          <p>Рейтинг игрока</p>
          <p>Статистика игрока</p>
        </li>
      </ul>

      <hr />
      <ChatGroup />
    </div>
  )
}

export default GroupDetail
