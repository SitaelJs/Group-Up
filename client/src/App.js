import './App.css';
import Chat from "./componets/Chat/Chat";
import FormAuth from "./componets/FormAuth/FormAuth";
import GameSettings from "./componets/GameSettings/GameSettings";
import Group from "./componets/Group/Group";
import GroupDetail from "./componets/GroupDetail/GroupDetail";
import GroupList from "./componets/GroupList/GroupList";
import GameList from "./componets/GameList/GameList";
import ChatGroup from "./componets/ChatGroup/ChatGroup";
import ChatPrivate from "./componets/ChatPrivate/ChatPrivate";


function App() {
	return (
		<div className="App">


			<FormAuth/>
			<GameList/>
			<GameSettings/>
			<Group/>
			<GroupDetail/>
			<GroupList/>
			<Chat/>
			<ChatGroup/>
			<ChatPrivate/>


		</div>
	);
}

export default App;
