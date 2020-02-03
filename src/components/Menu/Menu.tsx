import React, { Dispatch, ChangeEvent, useState } from 'react';
import { Styled } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { CanvasActions } from '../../redux/actions/CanvasActions';

const Menu: React.FC = () => {

  const [ fileOpen, setFileOpen ] = useState<boolean>(false);

  const { width, height } = useSelector((state: AppState) => state.canvas);
  const dispatch = useDispatch<Dispatch<CanvasActions>>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch(e.target.name) {
      case 'width': 
        dispatch({ type: 'SET_WIDTH', value: parseInt(e.target.value)})
        break
      case 'height': 
        dispatch({ type: 'SET_HEIGHT', value: parseInt(e.target.value)})
        break
      default: return
    }
  }

  const handleApplyCanvasSize = (): void => {
    dispatch({ type: 'DRAW_PIXELS' })
  } 

  return (
    <Styled.Menu>
      <Styled.Button onClick={() => setFileOpen(!fileOpen)} open={fileOpen}>
        File
        <Styled.Dropdown open={fileOpen} >
          <Styled.Option>
            New...
          </Styled.Option>
        </Styled.Dropdown>
      </Styled.Button>

    </Styled.Menu>
  )
}

export default Menu;
