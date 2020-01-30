import React, { Dispatch, ChangeEvent } from 'react';
import { Styled } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { CanvasActions } from '../../redux/actions/CanvasActions';

const Menu: React.FC = () => {

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
      <label htmlFor="width">width:</label>
      <input name="width" id="width" type="number" value={width} onChange={handleChange}/>
      <input name="height" id="height" type="number" value={height} onChange={handleChange}/>
      <button onClick={handleApplyCanvasSize}>Apply</button>
    </Styled.Menu>
  )
}

export default Menu;
