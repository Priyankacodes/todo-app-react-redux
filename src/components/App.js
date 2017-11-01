import React from 'react';

import NavBar from './NavBar';
import HeaderContainer from '../containers/HeaderContainer';
import TaskBoardContainer from '../containers/TaskBoardContainer';

const App = () => (
    <div>
      <NavBar />
      <HeaderContainer />
      <TaskBoardContainer />
    </div>
);

export default App;