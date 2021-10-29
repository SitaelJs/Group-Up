import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route exact path='/signin'> 
    </Route>
    <Route exact path='/signup'>
    </Route>
    <Route exact path="/">
      <Main />
      <Footer />
    </Route>
    <Route exact path="/profile">
      <Profile />
    </Route>

    </Switch>
    </Router>
    </div>
  );
}

export default App
