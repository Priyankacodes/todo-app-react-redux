import { TOGGLE_ERROR } from './actionTypes';

export const toggleError = (errorType) => ({
  type: TOGGLE_ERROR,
  errorType
});

