import { connect } from 'react-redux';

import TaskHeader from '../components/TaskHeader';
import { addTask, saveTasks } from '../actions/tasks';

const mapStateToProps = ({ tasks, saveBtn }) => 
                        ({ tasks, saveBtn });

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  saveTasks: () => dispatch(saveTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskHeader);