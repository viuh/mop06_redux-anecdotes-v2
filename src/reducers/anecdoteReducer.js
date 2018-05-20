

import { showNewCreation, showNotification } from './notificationReducer'


/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/

const getId = () => (100000*Math.random()).toFixed(0)

/*const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}*/

export const createNewAnecdote = (content) => {
  //console.log('Dui?', content)
  return {
    type: 'CREATE',
    id: getId(),
    name: content
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
    let nimi2 =action.name 
    //console.log('YYY ', action, '--', action.id, ':nimi:', nimi2)
    //console.log('YYY2', action.name)
    //createNewAnecdote(nimi2)
    showNewCreation(nimi2)

    return [...store, { content: action.name, id: getId(), votes:0 }]
  }

  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }


  return store
}

export default reducer