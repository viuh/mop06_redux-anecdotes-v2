
import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  
  console.log('resp',response.data)
  
  return response.data

  
}


const createNew = async (newObj) => {
  const response = await axios.post(baseUrl, newObj)
  return response.data
}

export default {
  getAll, createNew
}
