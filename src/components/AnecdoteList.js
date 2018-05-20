import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'



class AnecdoteList extends React.Component {

  render() {

    const { anecdotes, filter } = this.props
    let mifilter = filter.filter
    //const anecdotes = this.props.store.getState().anecdotes
    const sorted = anecdotes.sort((a, b) => b.votes - a.votes)
    //console.log('tila:', this.props.store)

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
        {filtered.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.props.voteAnecdote(anecdote.id,anecdote.content)
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
  voteAnecdote
}

const conAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

//export default AnecdoteList
export default conAnecdoteList

// { type: 'VOTE', id: anecdote.id }