import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './stylesGroupList.module.css'
import Group from '../Group/Group'
import {
  filterGroups,
  getAllGroups,
  groupFilter,
} from '../../redux/AC/groupsAC'
import getAllGames from '../../redux/AC/gamesAC'
import getGameMode from '../../redux/AC/gamemodeAC'

function GroupList() {
  const groups = useSelector((state) => state.groups)
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const games = useSelector((state) => state.games)
  const gameModes = useSelector((state) => state.gameMode)
  const [gameId, setGameId] = useState(1)

  useEffect(() => {
    dispatch(getAllGames())
    dispatch(getAllGroups())
  }, [])

  useEffect(() => {
    dispatch(filterGroups(searchInput))
  }, [searchInput])

  useEffect(() => {
    dispatch(getGameMode(gameId))
  }, [gameId])

  const filterGroupsHandler = (e) => {
    e.preventDefault()
    dispatch(
      groupFilter(gameId, +e.target.modeId.value, +e.target.positionId.value)
    )
  }

  return (
    <div className={styles.groupList}>
      <div className={styles.filterForGroups}>
        <div className={styles.filterWindow}>
          <input onChange={(e) => setSearchInput(e.target.value)} type="text" />
          <select
            onChange={(e) => {
              setGameId(e.target.value)
            }}
          >
            {games?.map((game) => (
              <option value={game.id} key={game.id}>
                {game.title}
              </option>
            ))}
          </select>
          <form onSubmit={filterGroupsHandler}>
            <select name="modeId">
              {gameModes?.modes?.map((mode) => (
                <option value={mode?.id} key={mode.id}>
                  {mode.name}
                </option>
              ))}
            </select>
            <select name="positionId">
              {gameModes?.positions?.map((position) => (
                <option value={position.id} key={position.id}>
                  {position.name}
                </option>
              ))}
            </select>

            <button type="submit">найти</button>
          </form>
          {' '}
        </div>
      </div>
      <div className={styles.groupListMain}>
        {groups?.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}

export default GroupList
