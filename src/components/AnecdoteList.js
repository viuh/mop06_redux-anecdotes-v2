import React from 'react'
import { connect } from 'react-redux'

import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import anecdoteService from '../services/anecdotes'


class AnecdoteList extends React.Component {

  handleVoting = (anecdote) => {

    this.props.voteAnecdote(anecdote.id,anecdote.content)

    anecdote.votes=anecdote.votes+1
    //console.log('Korjattu otsy: ', anecdote)
    anecdoteService.update(anecdote.id, anecdote)
    
  } 

  render() {

    const { anecdotes, filter } = this.props
    let mifilter = filter.filter
    //let anecdotes2 = anecdotes //this.props.store.getState().anecdotes
    const sorted = anecdotes.sort((a, b) => b.votes - a.votes)

    //console.log('Sorted: ', sorted)
    //let mifilter = this.props.store.getState().filter.filter
    let filtered=null
    if (mifilter !== null) {
      filtered = sorted.filter( function (anecdote) {
        return anecdote.content.includes(mifilter)
      })}
    else {
      filtered = sorted
    }
    //console.log('Sortattu:', filtered)

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />

        {filtered.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleVoting (anecdote)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  initializeAnecdotes
}

const conAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

//export default AnecdoteList
export default conAnecdoteList

// { type: 'VOTE', id: anecdote.id }