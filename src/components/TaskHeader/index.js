import React, { Component } from 'react';

import Wrapper from './Wrapper';
import Logo from './Logo';
import ButtonWrapper from './ButtonWrapper';
import Button from './Button';

class TaskHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
          <Logo>
            <h2>Tasks</h2>  
          </Logo> 
          <ButtonWrapper>
            <Button color='grey' onClick={() => this.props.addTask('New Task') }>
              Add Task
            </Button>
            <span>        </span>
            <Button color='#70DB93' disabled={this.props.saveBtn} onClick={ () => this.props.saveTasks() }>
              Save
            </Button>
          </ButtonWrapper>  
      </Wrapper> 
    )
  }
}

export default TaskHeader;