import styles from './stylesPlayers.module.css'

function Player({ user }) {
  console.log(user)
  return (
    <div className={styles.playerItem}>
      <p>{user.nickname}</p>
      <p>
        Возраст
        {user.age}
      </p>
      <p>{user.info}</p>
      <p>Статистика игрока</p>
      <span type="button">Изменить группу</span>
    </div>
  )
}

export default Player
