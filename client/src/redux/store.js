import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk' // import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer' // const sagaMiddleware = createSagaMiddleware()
// const sagaMiddleware = createSagaMiddleware()
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import initState from './initStates'
import rootReducer from './reducers/rootReducer'
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const initStates = {
  games: [],
  gameMode: {},
  groups: [],
}
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, initStates, applyMiddleware(thunk))

// sagaMiddleware.run(rootSaga)

export default store
