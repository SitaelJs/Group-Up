import React from 'react';

const ChatGroup = () => {
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
						<input type='text' id='message-text' className='chat-form__input'
						       placeholder='Введите сообщение'/>
						<button type='submit' value="">Отправить</button>
					</form>
				</div>
			</div>
			<hr/>
		</div>
	);
};

export default ChatGroup;