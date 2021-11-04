import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initStates = {
  games: [],
  gameMode: {},
  groups: [],
  modes: [],
  users: [],
  characterisitics: [],
  auth: null,
}

const store = createStore(
  rootReducer,
  initStates,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
