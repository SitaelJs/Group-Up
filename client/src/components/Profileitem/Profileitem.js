import {Link} from 'react-router-dom'
import styles from './stylesProfItem.module.css'

function Profileitem({user}) {
	const ava = `${process.env.PUBLIC_URL}/media/ava.png`

	return (
		<div className={styles.profContainer}>


				<div className={styles.nameUser}>
					<Link to={`/users/${user.id}`}>
						<span>{user.nickname}</span>
					</Link>
				</div>
				<div className={styles.avaProf}>
					<img alt="" src={ava}/>
				</div>

		</div>
	)
}

export default Profileitem
