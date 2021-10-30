import styles from './styles.module.css'

const Profile = () => (
  <div className={styles.card}>

    <img className={styles.profImg} src="https://www.w3schools.com/w3images/team2.jpg" alt="userpic" />
    <h3>Nick name:</h3>
    <h4>Email:</h4>
    <h4>User information:</h4>
    <h4>User stats:</h4>
    <ul className={styles.characterisitics}>
      <li>Toxic:</li>
      <li>Friendly:</li>
      <li>Team player:</li>
      <li>Leader:</li>
      <li>Strategist:</li>
    </ul>

  </div>
)

export default Profile
