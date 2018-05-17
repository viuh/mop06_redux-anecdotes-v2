
//import reducer from './reducers/anecdoteReducer'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'

const reducer = combineReducers({
  notifications: notificationReducer,
  anecdotes: anecdoteReducer
})

const store = createStore(reducer)
console.log('No ny?', store.getState())


export default store