import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GameSettings from './components/GameSettings/GameSettings'
import GroupDetail from './components/GroupDetail/GroupDetail'
import GroupList from './components/GroupList/GroupList'
import GameList from './components/GameList/GameList'
import ChatPrivate from './components/ChatPrivate/ChatPrivate'
import Navbar from './components/Navbar/Navbar'
import FormAuth from './components/FormAuth/FormAuth'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="auth/signin">
            <FormAuth />
          </Route>

          <Route exact path="auth/signup">
            <FormAuth />
          </Route>

          <Route exact path="users/:userId/profile">
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
      </Router>
    </div>
  )
}

export default App
