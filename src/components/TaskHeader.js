import React, { Component } from 'react';
import { Container, Menu, Header, Button } from 'semantic-ui-react';

class TaskHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container text style={{ marginTop: '3em' }}>
        <Menu secondary>
          <Menu.Item>
            <Header as='h2'>Tasks</Header>  
          </Menu.Item> 
          <Menu.Menu position='right'>
            <Button color='grey' onClick={() => this.props.addTask('New Task') }>
              Add Task
            </Button>
            <Button disabled={this.props.saveBtn} color='green' onClick={ () => this.props.saveTasks() }>
              Save
            </Button>
          </Menu.Menu> 
        </Menu>  
      </Container> 
    )
  }
}

export default TaskHeader;
{/* <Container textAlign='left'>
<Header as='h2'>Tasks</Header>
</Container>  
<Container textAlign='right'>
<Button color='grey'>Add Task</Button>
<Button color='green'>Save</Button>
</Container> */}