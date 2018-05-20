
//import reducer from './reducers/anecdoteReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
//import { Provider } from 'react-redux'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer, { anecdoteInitialization } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

import anecdoteService from './services/anecdotes'


const reducer = combineReducers({
  notifications: notificationReducer,
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 * From: https://redux.js.org/advanced/middleware
 */
const timeoutScheduler = store => next => action => {

  if (action !== undefined) {
    console.log('Storessa: ', action, '-- ', action.meta)

    if (!action.meta || !action.meta.delay) {
      return next(action)
    }

    const timeoutId = setTimeout(
      () => next(action),
      action.meta.delay,
      action.text = ''
    )

    return function cancel() {
      clearTimeout(timeoutId)
    }
  }
}

const store = createStore(reducer,
  applyMiddleware(timeoutScheduler)
)

anecdoteService.getAll().then(data =>
  store.dispatch(anecdoteInitialization(data))
/*  anecdotes => anecdotes.forEach(anecdote => {
    store.dispatch({ type: 'CREATE', name: anecdote.content })
  })*/
)


//console.log('No ny?', store.getState())


export default store