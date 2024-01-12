import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { pokemonReducer } from './reducers/pokemon.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { featuring, firstName, logger } from './middlewares/index.jsx'
import { compose } from 'redux'
import { applyMiddleware } from 'redux'

const composedEnchancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring, firstName))

const store = createStore(pokemonReducer, composedEnchancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
