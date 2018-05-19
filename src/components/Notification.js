import React from 'react'


class Notification extends React.Component {

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    //console.log('Notifsi:',this.props.store.getState().notifications)
    return (
      <div style={style}>
        {this.props.store.getState().notifications.text}
      </div>
    )
  }
}

export default Notification
