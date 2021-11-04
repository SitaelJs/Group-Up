import { Link } from 'react-router-dom'
import styles from './mainStyles.module.css'

function Main() {
  const imgMain1 = `${process.env.PUBLIC_URL}/media/main_page/2q.jpg`
  const imgMain2 = `${process.env.PUBLIC_URL}/media/main_page/1q.jpg`
  const imgMain3 = `${process.env.PUBLIC_URL}/media/main_page/3q.jpg`
  const imgMain4 = `${process.env.PUBLIC_URL}/media/main_page/4q.jpg`

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <div className={styles.h1main}>
          <h1>
            GROUP UP
            <br />
            PLAY IN TEAM
          </h1>
        </div>
      </div>

      <div className={styles.imgBox}>
        <div className={styles.block1}>
          <div className={styles.imgMain1}>
            <span>ВЫБЕРИ СВОЮ КОМАНДУ</span>
            <Link to="/groups">
              <img alt="" src={imgMain1} />
            </Link>
          </div>
          <div className={styles.imgMain2}>
            <span>ОБОЗНАЧЬ СВОЮ РОЛЬ</span>
            <Link to="/games">
              <img alt="" src={imgMain2} />
            </Link>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.imgMain2}>
            <span>НАЙДИ ИДЕАЛЬНОГО ТИММЕЙТА</span>
            <Link to="/users">
              <img alt="" src={imgMain3} />
            </Link>
          </div>
          <div className={styles.imgMain1}>
            <span>НАСЛАЖДАЙСЯ ПОБЕДАМИ</span>
            <Link to="/users">
              <img alt="" src={imgMain4} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
