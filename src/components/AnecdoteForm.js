import React from 'react'
import { createNewAnecdote, anecdoteCreation } from '../reducers/anecdoteReducer';
import { showNewCreation }   from '../reducers/notificationReducer';
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    //this.props.store.dispatch(createNewAnecdote(content))
    //this.props.store.dispatch(showNewCreation(content))
    let res = ''
    if (content.length >0) { //to avoid adding empty stuff
  
  //    res = this.props.createNewAnecdote(content)
  //    this.props.showNewCreation(content + res)
      let newObj = createNewAnecdote(content)
      let uus = anecdoteService.createNew(newObj)
      console.log('Uus otsy:', newObj)
      //anecdoteCreation(uus.name,uus.id )
      console.log('lista nY: ', this.props.anecdotes)
      //this.props.anecdotes.concat(uus)
      this.props.anecdoteCreation(newObj.content, newObj.id)
      
      console.log('lista jalkeen: ', this.props.anecdotes)

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
  showNewCreation,
  anecdoteCreation
}


const conAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default conAnecdoteForm

//export default AnecdoteForm
