
import { notify } from './notificationReducer'
import anecdoteService from '../services/anecdotes'
//import thunk from 'redux-thunk'
const getId = () => (100000*Math.random()).toFixed(0)


export const createNewAnecdote = (content) => {
  const res = async (dispatch) => {
    await anecdoteService.createNew(content) 
    dispatch(content)
  }

  console.log('createNewAnecdote:', res)
  return content
}

export const anecdoteCreation = (content,id=getId()) => {
  return {
    'type': 'CREATE',
    'content':content,
    'id': id,
    'votes': 0,
  }
}



export const voteAnecdote = (id,name) => {
  return {
    type: 'VOTE',
    id: id,
    name: name
  }
}

export const initializeAnecdotes = () => {
 
  //console.log('InitializAnecdotes 111')
  let res =  async (dispatch) => {
    const anecdotes =  await anecdoteService.getAll()
    //console.log('Data:', anecdotes)
    dispatch( {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
  }
  return res
}

const reducer = (state = [], action) => {
  if (action.type==='VOTE') {
    const old = state.filter(a => a.id !==action.id)
    const voted = state.find(a => a.id === action.id)

    //showNotification(action.name)
    notify(action.name,5)
    return [...old, { ...voted, votes: voted.votes+1 } ]

  }
  if (action.type === 'CREATE') {
    let nimi2 =action.content
    let uus = createNewAnecdote(action)

    notify(nimi2, 5)
    //showNewCreation(nimi2)

    //return [...state, { content: action.content, id: getId(), votes:0 }]
    return [...state, uus]
  }

  if (action.type === 'INIT_ANECDOTES') {
    notify('Initializations done.', 3)
    //showNotification('initializations done.')
    return action.data
  }


  return state
}

export default reducer
