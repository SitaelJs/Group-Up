import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getAllUsers } from '../../redux/AC/usersAC'
import Profileitem from '../Profileitem/Profileitem'
import styles from './stylesProfile.module.css'

const Profilelist = () => {
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()
  useEffect(() => {
    axios('http://localhost:3001/users').then((dataFromBack) => {
      dispatch(getAllUsers(dataFromBack.data))
    })
  }, [])

  return (
    <div className={styles.playersList}>
      {users?.map((user) => (
        <Profileitem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Profilelist
