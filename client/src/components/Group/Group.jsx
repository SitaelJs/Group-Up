import { Link } from 'react-router-dom'

function Group({ group }) {
  return (
    <div>
      <Link to={`/group/${group.id}`}>
        <h1>{group.name}</h1>
      </Link>
      <h2>Игра для группы</h2>

      <div>
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        <h3>Клеточки по кол-ву игроков в режиме(в пустых - свободные места с `&quot;`)</h3>
      </div>
      <hr />
    </div>
  )
}

export default Group
