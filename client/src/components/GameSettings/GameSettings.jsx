function GameSettings() {
  // const gameId = Number(useParams())
  // const allGames = useSelector((state) => state.games)
  // const game = allGames.find((game) => game.id === gameId)

  // console.log(props)

  return (
    <div>
      <h1>НАСТРОЙКИ ИГРЫ</h1>
      <img alt="" />
      {/*   картинка для игры(по айдишке */}
      <div>
        <span>НАЗВАНИЕ ИГРЫ</span>
      </div>
      <div>
        <p>
          <span>ВЫБОР РЕЖИМА</span>
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </p>
      </div>
      <hr />
    </div>
  )
}

export default GameSettings
