function SteamDone() {
  const { REACT_APP_URL_FRONT_SERVER } = process.env
  setTimeout(() => {
    window.open(`${REACT_APP_URL_FRONT_SERVER}`, '_self')
  }, 3e3)
  return (
    <div className="steamMessage">
      <h3>Steam успешно подключен!</h3>
    </div>
  )
}

export default SteamDone
