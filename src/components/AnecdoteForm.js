import React from 'react'
import { createNewAnecdote } from '../reducers/anecdoteReducer';
import { showNewCreation }   from '../reducers/notificationReducer';
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    //this.props.store.dispatch(createNewAnecdote(content))
    //this.props.store.dispatch(showNewCreation(content))
    
    if (content.length >0) { //to avoid adding empty stuff
    this.props.createNewAnecdote(content)
    this.props.showNewCreation(content)
    }
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter.filter
  }
}

const mapDispatchToProps = {
  createNewAnecdote,
  showNewCreation
}


const conAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default conAnecdoteForm

//export default AnecdoteForm
