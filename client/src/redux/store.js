import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import initStates from './initState'

const store = createStore(
  rootReducer,
  initStates,
  composeWithDevTools(applyMiddleware(thunk))
)
// store.subscribe(() => {
//   window.localStorage.setItem('redux', JSON.stringify(store.getState()))
// })
export default store
