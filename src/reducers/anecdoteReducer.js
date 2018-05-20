
import { showNewCreation, showNotification } from './notificationReducer'
import anecdoteService from '../services/anecdotes'

const getId = () => (100000*Math.random()).toFixed(0)


export const createNewAnecdote = (content) => {
  console.log('Dui?', content)
  let newObj = {
    id: getId(),
    content: content,
    votes: 0
  }

  return newObj
}

export const anecdoteCreation = (content,id) => {
  return {
    type: 'CREATE',
    content:content,
    id: id,
    votes: 0,
  }
}



export const voteAnecdote = (id,name) => {
  return {
    type: 'VOTE',
    id: id,
    name: name
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}


//const initialState = anecdotesAtStart.map(asObject)

const reducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    showNotification(action.name)

    return [...old, { ...voted, votes: voted.votes+1 } ]

  }
  if (action.type === 'CREATE') {
    let nimi2 =action.content
    console.log('YYY ', action, '--', action.id, ':nimi:', nimi2)
    console.log('YYY2', action.content)
    //createNewAnecdote(nimi2)
    showNewCreation(nimi2)

    return [...store, { content: action.content, id: getId(), votes:0 }]
  }

  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }


  return store
}

export default reducer