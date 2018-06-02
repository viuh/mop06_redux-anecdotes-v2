

const notificationsAtStart = {
  meta: { delay: 5000 },
  text: 'states initialized'
}


export const showNotification = (atext) => {

  let msg = 'Voted for: '+ atext
  let newstate = ''

  newstate = {
    meta: { delay: 5000 },
    type: 'SHOWVOTE',
    text: msg
  }


  return newstate
}

export const showNewCreation = (text) => {

  //console.log('uusi kehiin?',text)
  let newstate = { text: ' ' }

  if (text !== undefined ) {
    newstate = {
      meta: { delay: 5000 },
      type: 'SHOWNEW',
      text: 'New anecdote created: '+ text
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

  //console.log('NotifRed nyt:', store , ' actioni:' , action.text, '-- a---', action.type, '->', action)

  if (action.type === 'SHOWNEW' || action.type === 'CREATE') {
    let ek =  showNewCreation(action.content)
    removeNotification()
    return ek
  }

  if (action.type === 'SHOWVOTE' || action.type === 'VOTE') {

    let ek2 = showNotification(action.name)
    store = ek2
  }


  return store
}



export default reducer

