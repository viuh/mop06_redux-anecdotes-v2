import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {

  render() {
    //const anecdotes = this.props.store.getState().anecdotes
    //console.log('Lähtödata:', anecdotes)
    //console.log('Noties:',this.props.store.getState().notifications)
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification store={this.props.store} />
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App