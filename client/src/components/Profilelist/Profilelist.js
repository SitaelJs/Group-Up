import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getAllUsers } from '../../redux/AC/usersAC'

import Profileitem from '../Profileitem/Profileitem'

const Profilelist = () => {
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()
  useEffect(() => {
    axios('http://localhost:3001/users')
      .then((dataFromBack) => {
        console.log('1234', dataFromBack)
        dispatch(getAllUsers(dataFromBack.data))
      })
  }, [])

  return (
    <div>
      {users?.map((user) => (
        <Profileitem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Profilelist
