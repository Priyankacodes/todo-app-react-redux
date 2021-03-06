import React, { Component } from 'react';

import TaskItem from '../../components/TaskItem';
import Wrapper from './Wrapper';
import Message from './Message';
import CloseButton from './CloseButton';

class TaskBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks()
  }



  render() {
    if (this.props.tasks.length > 0) {
      return (
      <div>
        <Wrapper>  
          {this.props.tasks.map((task, index) => {
            return <TaskItem task={task} 
                             key={task+index} 
                             index={index}
                             updateTask={this.props.updateTask}
                             deleteTask={this.props.deleteTask} />
          })}
        </Wrapper>
        <div>    
        <Message hidden={this.props.error["save_error"]}
          color={'#ff0033'}
          bcolor={'#ffe5ea'}
        >
          <CloseButton color={'#ff0033'} onClick={() => this.props.toggleError("save_error")} >
            &times;
            </CloseButton>
          Error saving the tasks update.
        </Message>
        <Message hidden={this.props.error["load_error"]}
          color={'#ff0033'}
          bcolor={'#ffe5ea'}
        >
          <CloseButton color={'#ff0033'} onClick={() => this.props.toggleError("load_error")} >
            &times;
            </CloseButton>
          Error loading the initial data.
        </Message>
        <Message
          hidden={this.props.error["save_success"]}
          bcolor={'#e2f7e9'}
          color={'#70DB93'}
        >
          <CloseButton color={'#70DB93'} onClick={() => this.props.toggleError("save_success")} >
            &times;
            </CloseButton>
          Tasks saved successfully.
        </Message>
      </div> 
     </div>  
      )} else {
      return (
      <Wrapper>  
        <h3>Loading data...</h3>
      </Wrapper>  
      )
    } 
  }
}

export default TaskBoard;