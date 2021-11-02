import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllGroups } from '../../redux/AC/groupsAC'
import getAllGames from '../../redux/AC/gamesAC'
import getAllModes from '../../redux/AC/modesAC'
import { getUsersForGroup } from '../../redux/AC/usersAC'
import Player from '../Player/Player'

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
  const users = useSelector((state) => state.users)

  const gamePic = `${process.env.PUBLIC_URL}/media/gamesPicGroups/gameId=${group?.gameId}ForGroups.png`

  useEffect(() => {
    dispatch(getUsersForGroup(groupsId))
  }, [])

  return (
    <div>
      <h1>{game?.title}</h1>
      <img alt="" style={{ width: 200 }} src={gamePic} />
      <h3>
        Режим игры:
        {curModes?.name}
      </h3>
      <ul>
        {users?.map((user) => (
          <Player key={user.id} user={user} groupId={groupsId} />
        ))}
      </ul>
      <hr />
    </div>
  )
}

export default GroupDetail
