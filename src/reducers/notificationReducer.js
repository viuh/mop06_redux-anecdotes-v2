import React from 'react'


const notificationsAtStart = {
  meta: { delay: 5000 },
  text: 'states initialized'
}

const notificationReducer = (state='', action) => {

  console.log('NoRe:', action)

  switch (action.type) {
  case 'SHOWVOTE':
    return { text: 'You voted' + action.text , meta: { delay:5000 } }
  case 'SHOWNEW' :
    return { text: 'Created new: '+action.text, meta: { delay:5000 } }
  default:
    return state
  }
}

//meta: { delay: N }

export const showNotification = (atext) => {
  console.log('sn: param >', atext, '<')
  let msg = 'xVoted for '+ atext
  let newstate = ''

  newstate= { text: msg, meta: { delay:5000 } , type: 'SHOWVOTE' }
  return newstate
}

export const showNewCreation = (text) => {

  console.log('uusi kehiin?',text)
  let newstate = { text: ' ' }

  if (text !== undefined ) {
    newstate = {
      meta: { delay: 5000 },
      type: 'SHOWNEW',
      text: 'New created:'+ text
    }
  } else {

  }



  //let store = newstate
  return newstate

}

export const removeNotification = () => {
  return {
    type: 'REMOVE',
    text : '',
    meta: { delay: 0 }
  }
}




const initialState = notificationsAtStart

const reducer = (store = initialState, action) => {

  console.log('NotifRed nyt:', store , ' actioni:' , action.text, '-- a---', action.type)

  if (action.type === 'SHOWNEW' || action.type === 'CREATE') {
    let ek =  showNewCreation(action.content)
    removeNotification()
    return ek
    //return { text: 'xxCreated new: '+action.text, meta: { delay:5000 } }
  }

  if (action.type === 'SHOWVOTE' || action.type === 'VOTE') {
    let uus = showNotification(action.content)
    console.log('ja poistan ilmoa')
    removeNotification()
    return uus
    //return { text: 'xVoted for: '+action.text, meta: { delay:5000 } }
  }



  return store
}



export default reducer

