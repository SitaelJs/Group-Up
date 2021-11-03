import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import getAllGames from '../../redux/AC/gamesAC'
import getGameMode from '../../redux/AC/gamemodeAC'
import {addNewGroup, getAllGroups} from '../../redux/AC/groupsAC'
import styles from './stylesGameSettings.module.css'

function GameSettings() {
	const {gamesId} = useParams()

	const dispatch = useDispatch()
	const history = useHistory()

	const allGames = useSelector((state) => state.games)
	const gameSettings = useSelector((state) => state.gameMode)
	const allGroups = useSelector((state) => state.groups)

	const game = allGames.find((el) => el.id === Number(gamesId))
	const gamePic = `${process.env.PUBLIC_URL}/media/gamesPicDetail/gameId=${game?.id}Detail.jpeg`

	useEffect(() => {
		dispatch(getAllGames())
		dispatch(getAllGroups())

		if (game) {
			dispatch(getGameMode(game.id))
		}
	}, [game?.id])

	const findGroupHandler = (e) => {
		e.preventDefault()
		history.push('/groups')
	}

	const createGroupHandler = (e) => {
		e.preventDefault()
		if (gameSettings) {
			const newGroup = {
				gameId: game.id,
				modeId: +e.target.modeId.value,
				positionId: +e.target.positionId.value,
			}
			dispatch(addNewGroup(newGroup))
			const params = allGroups[allGroups.length - 1].id
			const paramsForCurGame = params + 1
			history.push(`/groups/${paramsForCurGame}`)
		}
	}

	return (
		<div className={styles.gameSet}>
			<span className={styles.gameSetTitle}>{game?.title}</span>
			<img alt="" src={gamePic}/>

			<form onSubmit={createGroupHandler}>
				<div className={styles.formGameSet}>
					<div className={styles.selectMode}>
						<span>режим</span>
						<select name="modeId">
							{gameSettings?.modes?.map((mode) => (
								<option key={mode.id} value={mode?.id}>
									{mode?.name}
								</option>
							))}
						</select>
					</div>
					<div className={styles.selectPosition}>
						<span>роль</span>
						<select name="positionId">
							{gameSettings?.positions?.map((position) => (
								<option key={position.id} value={position?.id}>
									{position?.name}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className={styles.buttonCreateGroup}>
					<button type="button" onClick={findGroupHandler}>
						найти группу
					</button>
					<button type="submit">создать группу</button>
				</div>

			</form>
		</div>
	)
}

export default GameSettings
