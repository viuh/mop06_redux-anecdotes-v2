import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'




class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const sorted = anecdotes.sort((a, b) => b.votes - a.votes)
    //console.log('tila:', this.props.store)

    let mifilter = this.props.store.getState().filter.filter
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
        {filtered.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.props.store.dispatch(voteAnecdote(anecdote.id, anecdote.content))
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

export default AnecdoteList


// { type: 'VOTE', id: anecdote.id }