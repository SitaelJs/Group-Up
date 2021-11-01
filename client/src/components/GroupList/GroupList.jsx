import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Group from '../Group/Group'
import { getAllGroups } from '../../redux/AC/groupsAc'

function GroupList() {
  const groups = useSelector((state) => state.groups)

  console.log(groups)

  const dispatch = useDispatch()
  useEffect(() => {
    axios('http://localhost:3001/group').then((dataFromBack) =>
      dispatch(getAllGroups(dataFromBack.data))
    )
  }, [])

  console.log(groups)
  return (
    <div>
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  )
}

export default GroupList
