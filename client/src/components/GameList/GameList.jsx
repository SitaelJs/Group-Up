import Game from '../Game/Game'

function GameList() {
  return (
    <div>
      <h1>ВСЕ ИГРЫ(ВЫБОР ИГРЫ)</h1>

      <div>
        <p><span>CS: GO</span></p>
        <img
          style={{ width: 400 }}
          src="https://csgodb.ru/img.php?id=278438"
          alt="pic"
        />
      </div>

      <Game />

      <div>
        <p><span>OVERWATCH</span></p>
        <img
          style={{ width: 400 }}
          src="https://gameguru.ru/media/f/wallpapers/3/1/45/2/1920.jpg"
          alt="pic"
        />
      </div>
      <hr />
    </div>
  )
}

export default GameList
