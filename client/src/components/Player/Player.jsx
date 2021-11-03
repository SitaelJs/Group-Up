import { useDispatch } from 'react-redux'
import styles from './stylesPlayers.module.css'
import { Link } from 'react-router-dom'

function Player({ user, groupId }) {
  const dispatch = useDispatch()
  // const onClickJoinGroup = () => {
  //   dispatch(changeGroupForUser(user.id, groupId))
  // }
  return (
    <div className={styles.playerItem}>
      <p>{user.nickname}</p>
      <p>Роль игрока</p>
      <p>Рейтинг игрока</p>
      <p>Статистика игрока</p>
      <Link type="button">Изменить группу</Link>
    </div>
  )
}

export default Player
