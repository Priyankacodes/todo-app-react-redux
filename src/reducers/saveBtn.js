import { ENABLE_SAVE_BTN, DISABLE_SAVE_BTN } from '../actions/actionTypes';

const saveBtn = (state = true, action) => {
  switch (action.type) {
  case ENABLE_SAVE_BTN:
    return false;  
  case DISABLE_SAVE_BTN:
    return true;     
  default:
    return state;
  }
};

export default saveBtn;