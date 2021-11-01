// import styles from 'chatStyle.module.css'




function Chat() {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>ИГРОК 1 говорит: Привет! Ищу пати!</p>
            <p>ИГРОК 7 говорит: ГГ ВП</p>
          </div>
        </div>
        <div>
          <form>
            <input
              type="text"
              id="message-text"
              className="chat-form__input"
              placeholder="Введите сообщение"
            />
            <button className="cybr-btn">
              Buttons<span aria-hidden>_</span>
              <span aria-hidden className="cybr-btn__glitch">Buttons_</span>
              <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Chat
