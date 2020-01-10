// extension feature for babel. Eg. interaor, generator function.
import "babel-polyfill"

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import React from 'react'

import userReducer from './UserOpReduser'
import {rootSaga} from './rootSaga'
import * as at from './ActionType'
import Page from './Page'


// reducer
const combinedReducer = combineReducers({
  userReducer
})

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

// dispatch action simulate action from component event like onClick.
store.dispatch({type:at.USER_LOGIN_REQUEST});
store.dispatch({type:at.FETCH_DATA});


// Nothing to do with Saga. Just for render component
function render() {
  ReactDOM.render(<Page />, document.getElementById('root'))
}
render()
// store.subscribe(render)