import { TOGGLE_ERROR } from '../actions/actionTypes';

const error = (state = {
    "save_error": true,
    "load_error": true,
    "save_success": true
    }, action) => {
  switch (action.type) {
  case TOGGLE_ERROR:
    state[action.errorType] = !state[action.errorType]
    return {...state}       
  default:
    return state;
  }
};

export default error;