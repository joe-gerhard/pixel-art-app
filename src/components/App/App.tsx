import React from 'react';
import { Styled } from './styles';
import Canvas from '../Canvas';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

const App: React.FC = () => {

  return (
   <Styled.App>
     <Menu />
     <Styled.Main>
      <Toolbar />
      <Canvas />
     </Styled.Main>
   </Styled.App>
  );
}

export default App;

