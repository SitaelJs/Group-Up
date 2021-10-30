import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Group from '../Group/Group'
import { getAllGroups } from '../../redux/AC/groupsAc'

function GroupList() {
  const groups = useSelector((state) => state.groups)

  const dispatch = useDispatch()
  useEffect(() => {
    axios('http://localhost:3002/api/v1/groups')
      .then((dataFromBack) => dispatch(getAllGroups(dataFromBack)))
  }, [])
  return (
    <div>
      {groups.map((group) => (
        <Group
          key={group.id}
          group={group}
        />

      ))}
    </div>
  )
}

export default GroupList
