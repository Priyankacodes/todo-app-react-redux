import { TOGGLE_ERROR } from '../actions/actionTypes';

const error = (state = {
    "save_error": true,
    "load_error": true,
    "save_success": true
    }, action) => {
  switch (action.type) {
  case TOGGLE_ERROR:
    let newState = {...state}
    newState[action.errorType] = !newState[action.errorType]
    return newState;   
  default:
    return state;
  }
};

export default error;