import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { logger } from './middlewares/index.jsx'
import { compose } from 'redux'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer.jsx'

const conmposeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //linea de codigo cuando se utiliza redux thunk

const composedEnchancers = conmposeAlt(applyMiddleware( thunk, logger))

const store = createStore(rootReducer, composedEnchancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
