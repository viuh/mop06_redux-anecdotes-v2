
const filterAtStart = { filter:null ,  meta: { delay: 3000 } }

const initialState = filterAtStart

export const filtery = (filtertext) => {
  return {
    type: 'FILTER',
    filter: filtertext }
}


const reducer = (store = initialState, action) => {

  //console.log('Filter', store, '--', action)

  if (action.type === 'FILTER') {

    store = { filter: action.filter , meta: { delay: 3000 } }

  }

  //console.log('FILTER INFO:', store)
  return store
}



export default reducer

