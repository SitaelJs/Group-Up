import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import GameList from './components/GameList/GameList'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import FormAuth from './components/FormAuth/FormAuth'
import Profile from './components/Profile/Profile'
import GameSettings from './components/GameSettings/GameSettings'
import GroupList from './components/GroupList/GroupList'
import GroupDetail from './components/GroupDetail/GroupDetail'
import ChatPrivate from './components/ChatPrivate/ChatPrivate'
import Footer from './components/Footer/Footer'
import FormSignIn from './components/FormSignIn/FormSignIn'
import { checkAuthUser } from './redux/AC/userAC'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthUser())
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/auth/signin">
            <FormSignIn />
          </Route>

          <Route exact path="/auth/signup">
            <FormAuth />
          </Route>

          {/* <Route exact path="users/:userId/profile"> */}
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/games">
            <GameList />
          </Route>

          <Route exact path="/games/:gamesId">
            <GameSettings />
          </Route>

          <Route exact path="/groups">
            <GroupList />
          </Route>

          <Route exact path="/groups/:groupsId">
            <GroupDetail />
          </Route>
        </Switch>
        <ChatPrivate />
        <Footer />
      </div>
    </Router>
  )
}

export default App
