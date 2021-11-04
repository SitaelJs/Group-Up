import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/AC/usersAC'
import { useLoaderContext } from '../../contexts/loaderContext'
import WithLoader from '../../hocs/withLoader'

import Profileitem from '../Profileitem/Profileitem'

const Profilelist = () => {
  const users = useSelector((state) => state.users)
  const { activate, deactivate } = useLoaderContext()

  const dispatch = useDispatch()
  useEffect(() => {
    if (!users.length) {
      activate()
      axios('http://localhost:3001/users')
        .then((dataFromBack) => {
          dispatch(getAllUsers(dataFromBack.data))
          deactivate()
        })
    }
  }, [])

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

export default WithLoader(Profilelist)
