import React from 'react'


const notificationsAtStart = {
  text: 'states initialized'
}

const notificationReducer = (state='', action) => {

  switch (action.type) {
  case 'SHOWSUCCESS':
    return action.text
  default:
    return state
  }
}


export const showSuccess = (text) => {
  return {
    type: 'SHOWSUCCESS',
    text
  }
}

const initialState = notificationsAtStart

const reducer = (store = initialState, action) => {

  console.log('Notifsisa?', store )
  return store
}



export default reducer

