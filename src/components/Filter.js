import React from 'react'

import {filtery} from '../reducers/filterReducer' 


class Filter extends React.Component {
  handleChange = (e) => {
    // input-kentän arvo muuttujassa event.target.value
    e.preventDefault()
    const content = e.target.value
    //console.log('Filtteri olisi: ', content)
    this.props.store.dispatch(filtery(content))

  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}


export default Filter

