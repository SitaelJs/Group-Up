import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk' // import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer' // import rootSaga from './sagas/rootSaga'
// import rootSaga from './sagas/rootSaga'

const initStates = {
  games: [],
  gameMode: {},
  groups: [],
  modes: [],
  positions: [],
}
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initStates,
  composeWithDevTools(applyMiddleware(thunk))
)

// sagaMiddleware.run(rootSaga)

export default store
