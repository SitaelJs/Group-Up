import { Link } from 'react-router-dom'

function Group({ group }) {
  return (
    <div>
      <Link to={`/groups/${group?.id}`}>
        <h1>{group.name}</h1>
      </Link>
      <h2>game</h2>

      <div>
        <h3>
          Клеточки по кол-ву игроков в режиме(в пустых - свободные места с
          `&quot;`)
        </h3>
      </div>
      <hr />
    </div>
  )
}

export default Group
