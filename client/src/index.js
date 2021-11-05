import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import LoaderContextWrapper from './contexts/loaderContext'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoaderContextWrapper>
        <App className="container" />
      </LoaderContextWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
