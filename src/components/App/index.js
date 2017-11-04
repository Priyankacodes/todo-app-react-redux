import React from 'react';
import { ThemeProvider } from 'styled-components';

import NavBar from '../NavBar';
import HeaderContainer from '../../containers/HeaderContainer';
import TaskBoardContainer from '../../containers/TaskBoardContainer';

import Wrapper from './Wrapper';
import WrapperBody from './WrapperBody';
import themes from '../../themes';

const App = () => (
  <ThemeProvider theme={themes}>
    <Wrapper>
      <NavBar />
      <WrapperBody>
        <HeaderContainer />
        <TaskBoardContainer />
      </WrapperBody>  
    </Wrapper>
  </ThemeProvider>  
);

export default App;