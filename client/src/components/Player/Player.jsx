import styles from './stylesPlayers.module.css'

function Player({ user }) {
  return (
    <div className={styles.playerItem}>
      <p>{user.nickname}</p>
      <p>Роль игрока</p>
      <p>Рейтинг игрока</p>
      <p>Статистика игрока</p>
      <span type="button">Изменить группу</span>
    </div>
  )
}

export default Player
