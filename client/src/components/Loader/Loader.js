import styles from './styles.module.css'

const Loader = () => (
  <div className="d-flex justify-content-center">
    <div className={styles['lds-facebook']}>
      <div />
      <div />
      <div />
    </div>
  </div>
)

export default Loader
