import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import Profilelist from './components/Profilelist/Profilelist'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/auth/signin">
            <FormAuth />
          </Route>

          {/* <Route exact path="users/:userId/profile"> */}
          <Route exact path="/users/:userId">
            <Profile />
          </Route>
          <Route exact path="/users">
            <Profilelist />
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
