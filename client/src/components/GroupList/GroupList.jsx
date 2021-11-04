import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './stylesGroupList.module.css'
import Group from '../Group/Group'
import { filterGroups, getAllGroups } from '../../redux/AC/groupsAC'

function GroupList() {
  const groups = useSelector((state) => state.groups)
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGroups())
  }, [])

  useEffect(() => {
    dispatch(filterGroups(searchInput))
  }, [searchInput])

  return (
    <div className={styles.groupList}>
      <input onChange={(e) => setSearchInput(e.target.value)} type="text" />
      <div>
        {groups.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}

export default GroupList
