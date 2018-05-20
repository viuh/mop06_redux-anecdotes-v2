import React from 'react'
import { connect } from 'react-redux'

import {filtery} from '../reducers/filterReducer' 


class Filter extends React.Component {
  handleChange = (e) => {
    // input-kentän arvo muuttujassa event.target.value
    e.preventDefault()
    
    const content = e.target.value
    //console.log('Filtteri olisi: ', content)
    //this.props.store.dispatch(filtery(content))
    this.props.filtery(content)
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

/*doFiltering = (content) => () => {
  this.props.store.dispatch(filtery(content))  
}*/

const mapDispatchToProps = {
  filtery
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}


const conFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default conFilter

//export default Filter

