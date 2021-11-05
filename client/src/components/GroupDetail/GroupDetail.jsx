/* eslint-disable no-nested-ternary */
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changeGroupForUser, getAllGroups, groupDelete } from '../../redux/AC/groupsAC'
import getAllGames from '../../redux/AC/gamesAC'
import getAllModes from '../../redux/AC/modesAC'
import { getAllUsers, getUsersForGroup } from '../../redux/AC/usersAC'
import Player from '../Player/Player'
import styles from './detailedGroupStyle.module.css'
import { useLoaderContext } from '../../contexts/loaderContext'
import Modal from '../Modal/Modal'

function GroupDetail() {
  const [showJoin, setShowJoin] = useState(true)
  const { groupsId } = useParams()
  const dispatch = useDispatch()

  const [link, setLink] = useState(false)
  const [leave, setLeave] = useState(false)
  const { active, setActive } = useLoaderContext()
  // const text = 'https://discord.gg/Q3c42AmKts'

  console.log(active, 'group')
  const allGroups = useSelector((state) => state.groups)
  const allGames = useSelector((state) => state.games)
  const allModes = useSelector((state) => state.modes)
  const users = useSelector((state) => state.users)
  const group = allGroups?.find((el) => el.id === +groupsId)
  const game = allGames?.find((el) => el.id === group?.gameId)
  const curModes = allModes?.find((el) => el.id === group?.modeId)
  const oneUser = users.find((user) => user.id === Number(group?.userId))
  const gamePic = `${process.env.PUBLIC_URL}/media/gamesPicGroups/gameId=${group?.gameId}ForGroups.png`

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllGroups())
    dispatch(getAllGames())
    dispatch(getAllModes())
    dispatch(getUsersForGroup(groupsId))
  }, [])

  const onClickJoinGroup = () => {
    dispatch(changeGroupForUser(groupsId))
  }

  const deleteGroupHandler = () => {
    dispatch(groupDelete(groupsId))
  }

  const showHandler = () => {
    if (showJoin) {
      setLeave(false)
    } else {
      setLeave(true)
    }
  }

  const moveToGroups = () => {
    window.open('http://localhost:3000/groups', '_self')
  }

  return (
    <div className={styles.containerGroupDet}>
      <div className={styles.headGroup}>
        <img
          className={styles.imgGameGroup}
          alt=""
          style={{ width: 200 }}
          src={gamePic}
        />
        <div className={styles.gameSet}>
          <h1>{group?.name}</h1>
          <h2>{game?.title}</h2>
          <h3>{curModes?.name}</h3>
        </div>
      </div>

      <div className={styles.usersInGroups}>
        {users?.map((user) => (
          <Player
            key={user.id}
            join={onClickJoinGroup}
            showJoin={showJoin}
            setShowJoin={setShowJoin}
            group={group}
            user={user}
            groupId={groupsId}
          />
        ))}
      </div>

      <div className={styles.buttonJoinedGroup}>
        <div>
          {showJoin ? (
            <button
              type="button"
              onClick={() => {
                onClickJoinGroup()
                setShowJoin(!showJoin)
                setLeave(!leave)
              }}
            >
              JOIN GROUP
            </button>
          ) : link ? null : (
            <button
              type="button"
              onClick={() => {
                setActive(true)
                setLink(!link)
              }}
            >
              {' '}
              Ready!
            </button>
          )}
        </div>
        {leave && (
          <button
            onClick={() => {
              onClickJoinGroup()
              showHandler()
              setShowJoin(!showJoin)
              setLeave(!leave)
            }}
            type="button"
          >
            Выйти из группы
          </button>
        )}
        <div className={styles.deleteGroupBut}>
          {oneUser && (
            <button
              type="button"
              onClick={() => {
                deleteGroupHandler()
                moveToGroups()
              }}
            >
              Delete This Group
            </button>
          )}
        </div>
      </div>
      <Modal group={group} />
    </div>
  )
}

export default GroupDetail
