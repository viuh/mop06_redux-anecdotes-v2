import React from 'react'
import { createNewAnecdote } from '../reducers/anecdoteReducer';

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value

    this.props.store.dispatch(createNewAnecdote(content))
    /*this.props.store.dispatch({ 
      type: 'CREATE', 
      content 
    })*/
  
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

export default AnecdoteForm
