import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import FormAuth from './components/FormAuth/FormAuth'
import GameSettings from './components/GameSettings/GameSettings'
import Group from './components/Group/Group'
import GroupDetail from './components/GroupDetail/GroupDetail'
import GroupList from './components/GroupList/GroupList'
import GameList from './components/GameList/GameList'
import ChatGroup from './components/ChatGroup/ChatGroup'
import ChatPrivate from './components/ChatPrivate/ChatPrivate'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import Testprof from './components/Testprof/Testprof'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signin" />
          <Route exact path="/signup" />
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/gamelist">
            <GameList />
          </Route>
          <Route exact path="/group/:groupId">
            <GroupDetail />
          </Route>
          <Route exact path="/grouplist">
            <GroupList />
          </Route>
          <Route exact path="/group">
            <Group />
          </Route>
          <Route exact path="/games">
            <Game />
          </Route>
          <Route exact path="/test">
            <Testprof />
          </Route>
          <FormAuth />

          <GameSettings />

          <Game />
          <Chat />
          <ChatGroup />
          <ChatPrivate />

        </Switch>
      </Router>
    </div>
  )
}

export default App
