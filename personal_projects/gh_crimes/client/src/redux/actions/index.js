import axios from 'axios';
import * as types from './types';

//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api"

export const fetchUser = () => dispatch => {
  console.log('FETCH_USER')
  axios.get(`${url}/auth/google`)
    .then( res => {
      console.log(res)
      dispatch({ type: types.FETCH_USER, payload: res.data })
    })
    .catch( err => console.log('AXIOS:', err) )
}
