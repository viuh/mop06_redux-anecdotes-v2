import React from 'react'
import { createNewAnecdote, anecdoteCreation } from '../reducers/anecdoteReducer';
import { showNewCreation }   from '../reducers/notificationReducer';
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  addAnecdote = async(e) => {
    e.preventDefault()
    const contenti = e.target.anecdote.value
    e.target.anecdote.value = ''
    const arvot= anecdoteCreation(contenti)

    const newAn = await anecdoteService.createNew(arvot)
    this.props.createNewAnecdote(newAn)
    //createNewAnecdote(content)
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    //let res = ''
    if (content.length >0) { //to avoid adding empty stuff
  
      let newObj = createNewAnecdote(content)
      //let uus = anecdoteService.createNew(newObj)
      //console.log('Uus otsy:', newObj)
      //console.log('lista nY: ', this.props.anecdotes)
      this.props.anecdoteCreation(newObj.content, newObj.id)
      
      //console.log('lista jalkeen: ', this.props.anecdotes)

    }
    e.target.anecdote.value = ''
  }

   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
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
/*export default connect(
  null,
  {  }
)(AnecdoteForm)*/