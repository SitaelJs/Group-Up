import { useDispatch } from 'react-redux'
import { changeGroupForUser } from '../../redux/AC/usersAC'

function Player({ user, groupId }) {
  const dispatch = useDispatch()
  const onClickJoinGroup = () => {
    dispatch(changeGroupForUser(user.id, groupId))
  }
  return (
    <li>
      <p>{user.nickname}</p>
      <p>Роль игрока</p>
      <p>Рейтинг игрока</p>
      <p>Статистика игрока</p>
      <button type="button" onClick={onClickJoinGroup}>
        Изменить группу
      </button>
    </li>
  )
}

export default Player
