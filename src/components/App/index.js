import React from 'react';

import NavBar from '../NavBar';
import HeaderContainer from '../../containers/HeaderContainer';
import TaskBoardContainer from '../../containers/TaskBoardContainer';

import Wrapper from './Wrapper';
import WrapperBody from './WrapperBody';

const App = () => (
    <Wrapper>
      <NavBar />
      <WrapperBody>
        <HeaderContainer />
        <TaskBoardContainer />
      </WrapperBody>  
    </Wrapper>
);

export default App;