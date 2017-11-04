import React, { Component } from 'react';

import Wrapper from './Wrapper';
import TaskHeaderWrapper from './TaskHeaderWrapper';
import TrashIconWrapper from './TrashIconWrapper';
import TaskNameWrapper from './TaskNameWrapper';
import Input from './Input';

class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.task
    }

    this.handleChangeEvent = this.handleChangeEvent.bind(this)
    this.focusInputField = this.focusInputField.bind(this)
    this.moveCursortAtEnd = this.moveCursortAtEnd.bind(this)
  }

  handleChangeEvent(e) {
    var val = e.target.value;
    this.props.updateTask(val, this.props.index)
    const element = e.target
    console.log(element)
    element.focus()
  }

  focusInputField() {
    this.textInput.focus();
  }

  moveCursortAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  render() {
    return (
      <Wrapper>
        <TaskHeaderWrapper>
          <TaskNameWrapper>
            <Input transparent
                   inputField={input => this.inputField = input}
                   onChange={this.handleChangeEvent} 
                   onFocus={this.moveCursortAtEnd}
                   defaultValue={this.state.text.toUpperCase()} />
          </TaskNameWrapper>         
          <TrashIconWrapper>
            <i className="fa fa-trash-o" onClick={() => this.props.deleteTask(this.props.index)} />
          </TrashIconWrapper> 
        </TaskHeaderWrapper> 
      </Wrapper>
    ) 
  }
}      

export default TaskItem;