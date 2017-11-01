import { connect } from 'react-redux';

import TaskBoard from '../components/TaskBoard';
import { fetchTasks, deleteTask, updateTask } from '../actions/tasks';
import { toggleError } from '../actions/error';

const mapStateToProps = ({ tasks, error }) => 
                        ({ tasks, error });

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  deleteTask: (index) => dispatch(deleteTask(index)),
  updateTask: (task, index) => dispatch(updateTask(task, index)),
  toggleError: (errorType) => dispatch(toggleError(errorType))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);