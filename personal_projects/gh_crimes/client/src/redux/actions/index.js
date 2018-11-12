import axios from 'axios';
import * as types from './types';

export const fetchUser = () => dispatch => {
  axios.get('/api/current_user')
    .then( res => {
      dispatch({ type: types.FETCH_USER, payload: res.data })
    })
    .catch( err => console.log(err) )
}
