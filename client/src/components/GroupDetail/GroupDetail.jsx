import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {
	changeGroupForUser,
	getAllGroups,
	groupDelete,
} from '../../redux/AC/groupsAC'
import getAllGames from '../../redux/AC/gamesAC'
import getAllModes from '../../redux/AC/modesAC'
import {getUsersForGroup} from '../../redux/AC/usersAC'
import Player from '../Player/Player.jsx'
import styles from './detailedGroupStyle.module.css'

function GroupDetail() {
	const [showJoin, setShowJoin] = useState(true)
	const {groupsId} = useParams()
	const dispatch = useDispatch()
	const [copied, setCopied] = useState(false)
	const [link, setLink] = useState(false)
	const [leave, setLeave] = useState(false)
	const text = 'https://discord.gg/Q3c42AmKts'
	const copy = async () => {
		await navigator.clipboard.writeText(text)
		setCopied(true)
		setTimeout(() => {
			setLink(!link)
		}, 5000)
	}

	const allGroups = useSelector((state) => state.groups)
	const allGames = useSelector((state) => state.games)
	const allModes = useSelector((state) => state.modes)
	const group = allGroups?.find((el) => el.id === +groupsId)
	const game = allGames?.find((el) => el.id === group?.gameId)
	const curModes = allModes?.find((el) => el.id === group?.modeId)
	const users = useSelector((state) => state.users)
	const oneUser = users.find((user) => user.id == group.userId)
	const gamePic = `${process.env.PUBLIC_URL}/media/gamesPicGroups/gameId=${group?.gameId}ForGroups.png`

	useEffect(() => {
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
		<div>
			{oneUser && (
				<button
					onClick={() => {
						deleteGroupHandler()
						moveToGroups()
					}}
				>
					Delete This Group
				</button>
			)}

			<h1>{game?.title}</h1>
			<img alt="" style={{width: 200}} src={gamePic}/>
			<h3>
				Режим игры:
				{curModes?.name}
			</h3>
			<div className={styles.containerGroupDet}>
				<div className={styles.headGroup}>
					<img
						className={styles.imgGameGroup}
						alt=""
						style={{width: 200}}
						src={gamePic}
					/>
					<div className={styles.gameSet}>
						<h1>{game?.title}</h1>
						<h3>Режим игры: {curModes?.name}</h3>
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
				{showJoin ? (
					<button
						onClick={() => {
							onClickJoinGroup()
							setShowJoin(!showJoin)
							setLeave(!leave)
						}}
					>
						JOIN GROUP
					</button>
				) : link ? (
					<>
						{' '}
						<input readOnly value={text}/>
						<button
							onClick={copy}
							style={
								copied
									? {backgroundColor: 'green'}
									: {backgroundColor: 'grey'}
							}
						>
							{copied ? 'Copied!' : 'Copy To Clipboard'}
						</button>
					</>
				) : (
					<button onClick={() => setLink(!link)}> Ready!</button>
				)}
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
			</div>
		</div>
	)
}

export default GroupDetail
