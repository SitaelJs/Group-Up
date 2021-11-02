import { Link } from 'react-router-dom'

function Profileitem({ user }) {
  return (
    <div>
      <Link to={`/users/${user.id}`}>
        <span>{user.nickname}</span>
      </Link>
    </div>
  )
}

export default Profileitem
