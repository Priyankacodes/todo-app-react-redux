import React, { Component } from 'react';
import { List, Segment, Icon, Container, Menu, Input } from 'semantic-ui-react';

class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.task
    }

    this.handleChangeEvent = this.handleChangeEvent.bind(this)
    this.focusUsernameInputField = this.focusUsernameInputField.bind(this)
    this.moveCursortAtEnd = this.moveCursortAtEnd.bind(this)
  }

  handleChangeEvent(e) {
    this.props.updateTask(e.target.value, this.props.index)
  }

  focusUsernameInputField(input) {
    if (input) {
      setTimeout(() => {input.focus()}, 100);
    }
  }

  moveCursortAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  render() {
    return (
      <Segment raised textAlign='left' size='large'>
        <Menu secondary>
          <Menu.Item>
            <Input transparent
                   onChange={this.handleChangeEvent} 
                   ref={this.focusUsernameInputField}
                   onFocus={this.moveCursortAtEnd}
                   defaultValue={this.state.text.toUpperCase()} />
          </Menu.Item> 
          <Menu.Item position='right'>
            <Icon name='trash outline' size='large' onClick={() => this.props.deleteTask(this.props.index)} />
          </Menu.Item> 
        </Menu> 
      </Segment>
    ) 
  }
}      

export default TaskItem;