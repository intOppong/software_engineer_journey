import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-631ca.firebaseio.com/'
})

export default instance;
