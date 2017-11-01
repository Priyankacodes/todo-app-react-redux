import { combineReducers } from 'redux';
import tasks from './tasks';
import saveBtn from './saveBtn';
import error from './error';

const rootReducer = combineReducers({
  tasks,
  saveBtn,
  error
});

export default rootReducer;