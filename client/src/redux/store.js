import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'

// import createSagaMiddleware from 'redux-saga'

// import rootSaga from './sagas/rootSaga'

// import rootSaga from './sagas/rootSaga'

const initStates = {
  games: [],
  gameMode: {},
  groups: [],
  modes: [],
  users: [],
  characterisitics: [],

}
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initStates,
  composeWithDevTools(applyMiddleware(thunk))
)

// sagaMiddleware.run(rootSaga)

export default store
