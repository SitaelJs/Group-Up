/* eslint-disable jsx-a11y/label-has-associated-control */
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers, getDataFromSteam } from '../../redux/AC/usersAC'
import {
  getCharacter,
  postDecrement,
  postIncrement,
} from '../../redux/AC/characterAC'
import styles from './stylesProfile.module.css'

function Profile() {
  const auth = useSelector((state) => state.auth)
  const localUser = JSON.parse(localStorage.getItem('user'))
  const steamDataLocal = JSON.parse(localStorage.getItem('steam'))
  const avaDet = `${process.env.PUBLIC_URL}/media/avaDet.png`
  const { userId } = useParams()
  const users = useSelector((state) => state.users)
  // const dataSteam = useSelector((state) => state.dataSteam)
  console.log('ЭТО ДАТАСТИМ======>', steamDataLocal)
  const user = users?.find((el) => el.id === Number(userId))
  const character = useSelector((state) => state.characterisitics)
  const imgUser = `${localUser.photo}`

  // const [disable, setDisable] = useState(false)
  // const [disable2, setDisable2] = useState(false)
  // const [disable3, setDisable3] = useState(false)
  // const [disable4, setDisable4] = useState(false)
  // const [disable1, setDisable1] = useState(false)

  const charac = character?.find((el) => el.toUserId === Number(userId))
  const { REACT_APP_URL_BACK_SERVER } = process.env
  const steamIco = `${process.env.PUBLIC_URL}/media/icons/steam_47012.png`
  // const dataFromSteam = useSelector((state) => state.dataFromSteam)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacter())
    dispatch(getAllUsers())
    dispatch(getDataFromSteam(Number(userId)))
  }, [])

  const incrementValue = (e, char) => {
    e.preventDefault()
    dispatch(postIncrement(userId, char, charac, auth))
  }

  const decrementValue = (e, char) => {
    e.preventDefault()
    dispatch(postDecrement(userId, char, charac, auth))
  }
  const steamSignInClick = (e) => {
    e.preventDefault()
    window.open(`${REACT_APP_URL_BACK_SERVER}/auth/steam`, '_self')
  }
  // console.log('ЭТО ОН ===>', localUser)
  return (
    <div className={styles.profileContainer}>
      {localUser?.id === Number(userId) ? (
        <img src={imgUser} alt="" />
      ) : (
        <img src={avaDet} alt="" />
      )}
      <h1 className="text">{user?.nickname}</h1>
      <h4 className="text">{user?.info}</h4>
      <h4 className="text">{user?.age}</h4>
      {localUser.steamID !== '0' ? (
        <div className={styles.steamLogo}>
          <img src={steamIco} alt="steam" />
        </div>
      ) : (
        <div className={styles.steamButton}>
          <button type="button" onClick={(e) => steamSignInClick(e)}>
            <span>Steam</span>
          </button>
        </div>
      )}
      {user?.steamID !== steamDataLocal?.getUserSteamID ? (
        <div>
          <h4 className="text">
            Nickname Steam:
            {' '}
            {steamDataLocal?.getUserNickname}
          </h4>
          <h4 className="text">
            Уровень Steam:
            {' '}
            {steamDataLocal?.getUserLevel}
          </h4>
          <h4 className="text">Последние игры:</h4>
          <ul>
            <li>{steamDataLocal?.sixGames[0]}</li>
            <li>{steamDataLocal?.sixGames[1]}</li>
            <li>{steamDataLocal?.sixGames[2]}</li>
            <li>{steamDataLocal?.sixGames[3]}</li>
            <li>{steamDataLocal?.sixGames[4]}</li>
            <li>{steamDataLocal?.sixGames[5]}</li>
          </ul>
        </div>
      ) : (
        <></>
      )}

      <span>Статистика пользователя</span>
      <div className={styles.statString}>
        <h3>Токсичность</h3>
        {localUser.id !== Number(userId) ? (
          <button
            className={styles.butFix}
            value="toxic"
            onClick={(e) => {
              // setDisable(true)
              incrementValue(e, 'toxic')
            }}
            type="button"
          >
            +
          </button>
        ) : (
          <></>
        )}
        <h2>{charac?.toxic}</h2>
        {localUser.id !== Number(userId) ? (
          <button
            name="toxic"
            onClick={(e) => {
              // setDisable(true)
              decrementValue(e, 'toxic')
            }}
            type="button"
            // disabled={disable}
          >
            -
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.statString}>
        <h3>Дружелюбность</h3>
        {localUser.id !== Number(userId) ? (
          <button
            className={styles.butFix}
            onClick={(e) => {
              // setDisable1(true)
              incrementValue(e, 'friendly')
            }}
            // disabled={disable1}
            type="button"
          >
            +
          </button>
        ) : (
          <></>
        )}
        <h2>{charac?.friendly}</h2>
        {localUser.id !== Number(userId) ? (
          <button
            onClick={(e) => {
              // setDisable1(true)
              decrementValue(e, 'friendly')
            }}
            // disabled={disable1}
            type="button"
          >
            -
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.statString}>
        <h3>Игра в команде</h3>
        {localUser.id !== Number(userId) ? (
          <button
            className={styles.butFix}
            onClick={(e) => {
              // setDisable2(true)
              incrementValue(e, 'teamPlayer')
            }}
            // disabled={disable2}
            type="button"
          >
            +
          </button>
        ) : (
          <></>
        )}
        <h2>{charac?.teamPlayer}</h2>
        {localUser.id !== Number(userId) ? (
          <button
            onClick={(e) => {
              // setDisable2(true)
              decrementValue(e, 'teamPlayer')
            }}
            // disabled={disable2}
            type="button"
          >
            -
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.statString}>
        <h3>Страгет</h3>
        {localUser.id !== Number(userId) ? (
          <button
            className={styles.butFix}
            onClick={(e) => {
              // setDisable3(true)
              incrementValue(e, 'strategy')
            }}
            // disabled={disable3}
            type="button"
          >
            +
          </button>
        ) : (
          <></>
        )}
        <h2>{charac?.strategy}</h2>
        {localUser.id !== Number(userId) ? (
          <button
            // disabled={disable3}
            onClick={(e) => {
              // setDisable3(true)
              decrementValue(e, 'strategy')
            }}
            type="button"
          >
            -
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.statString}>
        <h3>Лидер</h3>
        {localUser.id !== Number(userId) ? (
          <button
            className={styles.butFix}
            onClick={(e) => {
              // setDisable4(true)
              incrementValue(e, 'leader')
            }}
            // disabled={disable4}
            type="button"
          >
            +
          </button>
        ) : (
          <></>
        )}
        <h2>{charac?.leader}</h2>
        {localUser.id !== Number(userId) ? (
          <button
            onClick={(e) => {
              // setDisable4(true)
              decrementValue(e, 'leader')
            }}
            // disabled={disable4}
            type="button"
          >
            -
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Profile
