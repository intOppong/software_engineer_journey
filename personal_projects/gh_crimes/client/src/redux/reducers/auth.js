import { FETCH_USER } from '../actions/types';

const initialState = {
  user: {},
  isAuth: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return {
        ...state,
        isAuth: Object.keys(action.payload).length > 0 ? true : false,
        user: action.payload
      }
    default:
      return state;
  }
}
