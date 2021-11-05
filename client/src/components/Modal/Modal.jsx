import './Modal.css'
import { useState } from 'react'
import { useLoaderContext } from '../../contexts/loaderContext'
import styles from '../GroupDetail/detailedGroupStyle.module.css'

const Modal = ({ group }) => {
  const { setActive, active } = useLoaderContext()
  const [seconds, setSeconds] = useState(5)
  // const [copied, setCopied] = useState(false)
  const comment = `!createvoicechannel Group: ${group?.name}`
  const copy = async () => {
    await navigator.clipboard.writeText(comment)
  }
  let foo

  const redirectFunc = () => setTimeout(() => {
    window.open('https://discord.gg/Q3c42AmKts')
    setActive(false)
    clearInterval(foo)
  }, 5000)

  const countUpdateSec = () => {
    setSeconds((prev) => prev - 1)
  }

  const countdawnTimer = () => {
    foo = setInterval(() => {
      countUpdateSec()
    }, 1000)
  }
  // <>
  //   {' '}
  //   <input className={styles.hiddenLink} readOnly value={comment} />
  //   <button
  //     type="button"
  //     onClick={copy}
  //     style={
  //     copied ? { backgroundColor: 'green' } : { backgroundColor: 'grey' }
  //   }
  //   >
  //     {copied ? 'Copied! отправьте боту!' : 'Copy To Clipboard'}
  //   </button>
  // </>
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? 'modal active' : 'modal'}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(event) => event.stopPropagation()}
      >
        {seconds}
        <button
          onClick={() => {
            countdawnTimer()
            redirectFunc()
            copy()
          }}
        >
          GOOGOGOGO
        </button>
        <input className={styles.hiddenLink} readOnly value={comment} />
        <p style={{ color: 'black' }}>search</p>
      </div>
    </div>
  )
}

export default Modal
