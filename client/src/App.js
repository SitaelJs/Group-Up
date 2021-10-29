import './App.css'

import Chat from "./componets/Chat/Chat";
import FormAuth from "./componets/FormAuth/FormAuth";
import GameSettings from "./componets/GameSettings/GameSettings";
import Group from "./componets/Group/Group";
import GroupDetail from "./componets/GroupDetail/GroupDetail";
import GroupList from "./componets/GroupList/GroupList";
import GameList from "./componets/GameList/GameList";
import ChatGroup from "./componets/ChatGroup/ChatGroup";
import ChatPrivate from "./componets/ChatPrivate/ChatPrivate";
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path='/signin'>
					</Route>
					<Route exact path='/signup'>
					</Route>
					<Route exact path="/">
						<Main/>
						<Footer/>
					</Route>
					<Route exact path="/profile">
						<Profile/>
					</Route>


					<FormAuth/>
					<GameList/>
					<GameSettings/>
					<Group/>
					<GroupDetail/>
					<GroupList/>
					<Chat/>
					<ChatGroup/>
					<ChatPrivate/>

				</Switch>
			</Router>
		</div>
	);

}

export default App
