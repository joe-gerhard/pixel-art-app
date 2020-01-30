import React, { useEffect, Dispatch } from 'react';
import { Styled } from './styles';
import Canvas from '../Canvas';
import Toolbar from '../Toolbar';
import Menu from '../Menu';
import { useDispatch } from 'react-redux';
import { UserInputActions } from '../../redux/actions/UserInputActions';

const App: React.FC = () => {

  const dispatch = useDispatch<Dispatch<UserInputActions>>()

  useEffect(() => {

    const handleMouseDown = (): void => {
      dispatch({ 
        type: 'SET_MOUSE_DOWN'
      })
    }
  
    const handleMouseUp = (): void => {
      dispatch({
        type: 'SET_MOUSE_UP'
      })
    }

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

  },[dispatch])

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

