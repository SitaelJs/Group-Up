function Chat() {
	return (
		<div>
			<form>
				<input
					type="text"
					id="message-text"
					className="chat-form__input"
					placeholder="Введите сообщение"
				/>
				<button type="button" className="cybr-btn">
					Buttons
					<span aria-hidden>_</span>
					<span aria-hidden className="cybr-btn__glitch">
            Buttons_
          </span>
					<span aria-hidden className="cybr-btn__tag">
            R25
          </span>
				</button>
			</form>
		</div>
	)
}

export default Chat
