import { createStore,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//合并两个插件一个是redux-devtools，一个是thunk
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))

export default store