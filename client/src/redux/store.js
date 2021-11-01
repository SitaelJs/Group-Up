import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
// import rootSaga from './sagas/rootSaga'

const initStates = {
  games: [],
  gameMode: {},
  groups: [],
  users: [],
  characterisitics: [],
}
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, initStates, applyMiddleware(thunk))

// sagaMiddleware.run(rootSaga)

export default store
