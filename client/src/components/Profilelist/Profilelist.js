import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../redux/AC/userAC'

import Profileitem from '../Profileitem/Profileitem'

const Profilelist = () => {
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()
  useEffect(() => {
    axios('http://localhost:3001/users')
      .then((dataFromBack) => dispatch(getAllUser(dataFromBack.data)))
  }, [])
  console.log(users)
  return (
    <div>

      {users?.map((user) => (
        <Profileitem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  )
}

export default Profilelist
