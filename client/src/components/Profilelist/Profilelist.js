import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/AC/usersAC'

import Profileitem from '../Profileitem/Profileitem'

const Profilelist = () => {
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  console.log(users)
  return (
    <div>
      {users?.map((user) => (
        <Profileitem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Profilelist
