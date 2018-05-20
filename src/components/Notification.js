import React from 'react'
import { connect } from 'react-redux'


class Notification extends React.Component {

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    //console.log('Notifsi:',this.props.notifications)
    //{this.props.store.getState().notifications.text}
    return (
      <div style={style}>{this.props.notifications.text}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const mapDispatchToProps = {
}


//export default Notification

const ConNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)

export default ConNotification