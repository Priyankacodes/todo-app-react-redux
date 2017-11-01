import { SET_TASKS, ADDING_TASK, DEL_TASK, MOD_TASK } from '../actions/actionTypes';

const tasks = (state = [], action) => {
  switch (action.type) {
  case SET_TASKS:
    return action.tasks;
  case ADDING_TASK:
    return [ ...state, action.task];
  case DEL_TASK:
    const newState = [...state];
    newState.splice(action.index, 1)
    return newState;
  case MOD_TASK:
    const newState1 = [...state];
    newState1[action.index] = action.task
    return newState1;  
  default:
    return state;
  }
};

export default tasks;