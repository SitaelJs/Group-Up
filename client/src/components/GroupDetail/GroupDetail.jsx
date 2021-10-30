// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

function GroupDetail() {
  // const { groupId } = useParams()
  // const groups = useSelector((state) => state.groups)
  // const group = groups.find((group) => group.id === Number(groupId))

  return (
    <div>
      {/* <h1>{group.name}</h1> */}
      <h4>LOGO GAME</h4>

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
    </div>
  )
}

export default GroupDetail
