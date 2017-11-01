import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react';

import TaskItem from '../components/TaskItem';

class TaskBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    if (this.props.tasks) {
      return (
        <Container text style={{ marginTop: '3em' }}>  
          {this.props.tasks.map((task, index) => {
            return <TaskItem task={task} 
                             key={task+index} 
                             index={index}
                             updateTask={this.props.updateTask}
                             deleteTask={this.props.deleteTask} />
          })}
          <Message 
                   size='small'
                   negative 
                   onDismiss={() => this.props.toggleError("save_error")} 
                   hidden={ this.props.error["save_error"] } 
                   content='Error saving the tasks update'
          />
          <Message 
                   size='small'
                   negative 
                   onDismiss={() => this.props.toggleError("load_error")} 
                   hidden={ this.props.error["load_error"] } 
                   content='Error Loading Initial Data'
          />
          <Message 
                   size='small'
                   positive 
                   onDismiss={() => this.props.toggleError("save_success")} 
                   hidden={ this.props.error["save_success"] } 
                   content='Tasks saved successfully'
          />
        </Container>    
      )} else {
      return (
        <h3>Loading data...</h3>
      )
    } 
  }
}

export default TaskBoard;