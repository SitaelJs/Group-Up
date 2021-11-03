import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Group from '../Group/Group'
import { getAllGroups } from '../../redux/AC/groupsAC'
import styles from './stylesGroupList.module.css'

function GroupList() {
  const groups = useSelector((state) => state.groups)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllGroups())
  }, [])

  return (
    <div className={styles.groupList}>
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  )
}

export default GroupList
