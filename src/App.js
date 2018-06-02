import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


class App extends React.Component {

  componentDidMount () {
    //console.log('HERE?')
    this.props.initializeAnecdotes()
  }

  render() {
    //const anecdotes = this.props.store.getState().anecdotes
    //console.log('Lähtödata:', anecdotes)
    //console.log('Noties:',this.props.store.getState().notifications)
    //<Notification store={this.props.store} />
    return (
      <div>
        <h1>Programming anecdotes</h1>

        <Notification/>
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}


//export default App
export default connect(
  null, { initializeAnecdotes }
)(App)


/*        <Notification store={this.props.store}/>
        <Filter store={this.props.store} />
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
*/