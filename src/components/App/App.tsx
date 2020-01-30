import React, { useEffect } from 'react';
import { Styled } from './styles';
import Canvas from '../Canvas';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

const App: React.FC = () => {

  const handleMouseDown = (): void => {
    
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)

  })
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

