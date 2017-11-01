import axios from 'axios';
import { SET_TASKS, ADDING_TASK, MOD_TASK, DEL_TASK, FETCH_TASKS } from './actionTypes';
import { enableSaveBtn, disableSaveBtn } from './saveBtn';
import { toggleError } from './error'; 
import dummyData from '../data/dummyData'

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks
});
  
export const addingTask = task => ({
  type: ADDING_TASK,
  task
});

export const addTask = (task, index) => {
  return (dispatch, getState) => {
    return Promise.all([
      dispatch(addingTask(task, index)),
      dispatch(enableSaveBtn())
    ])
  }
};

export const modTask = (task, index) => ({
  type: MOD_TASK,
  task,
  index
});

export const delTask = index => ({
  type: DEL_TASK,
  index
});

export const updateTask = (task, index) => {
  return (dispatch, getState) => {
    return Promise.all([
      dispatch(modTask(task, index)),
      dispatch(enableSaveBtn())
    ])
  }
};

export const deleteTask = index => {
  return (dispatch, getState) => {
    return Promise.all([
      dispatch(delTask(index)),
      dispatch(enableSaveBtn())
    ])
  }
};

export const fetchTasks = () => {
  return (dispatch, getState) => {
    return axios.get(`http://cfassignment.herokuapp.com/priyanka/tasks`)
      .then(res => {
        if (res.data.tasks) {
          dispatch(setTasks(res.data.tasks));
        } else {
          dispatch(setTasks(dummyData.tasks)); //Was receiving null on all calls so added dummy data
        }
      })
      .catch(err => {
        console.log('Error loading data, replacing with inital data', err)
        dispatch(toggleError("load_error"))
        dispatch(setTasks(dummyData));
      })
  }
};

export const saveTasks = () => {
  return (dispatch, getState) => {
    const tasks = getState().tasks
    return axios.post(`http://cfassignment.herokuapp.com/priyanka/tasks`, tasks)
      .then(res => {
        console.log('Tasks sent to server saved successfully', res.data)
        dispatch(disableSaveBtn())
        dispatch(toggleError("save_success"))
      })
      .catch(err => {
        console.log('Error saving data to server', err)
        dispatch(toggleError("save_error"))
      })
  }
};