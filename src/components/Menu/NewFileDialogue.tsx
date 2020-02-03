import React, { Dispatch, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { CanvasActions } from '../../redux/actions/CanvasActions';
import { MenuActions } from '../../redux/actions/MenuActions';
import { Styled } from './styles';

const NewFileDialogue: React.FC = () => {

  const { width, height } = useSelector((state: AppState) => state.canvas);
  const canvasDispatch = useDispatch<Dispatch<CanvasActions>>();
  const menuDispatch = useDispatch<Dispatch<MenuActions>>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch(e.target.name) {
      case 'width': 
        canvasDispatch({ type: 'SET_WIDTH', value: parseInt(e.target.value)})
        break
      case 'height': 
        canvasDispatch({ type: 'SET_HEIGHT', value: parseInt(e.target.value)})
        break
      default: return
    }
  }

  const handleApplyCanvasSize = (): void => {
    canvasDispatch({ type: 'DRAW_PIXELS' });
    menuDispatch({ type: 'SET_DIALOGUE_CLOSED' });
  } 

  const handleCancel = (): void => {
    menuDispatch({ type: 'SET_DIALOGUE_CLOSED' });
  }

  return (
    <Styled.NewFileDialogue>
      <div>
        <label htmlFor="height">Height</label>
        <Styled.Input name="height" id="height" type="number" onChange={handleChange} value={height}/>
      </div>
      <div>
        <label htmlFor="width">Width</label>
        <Styled.Input name="width" id="width" type="number" onChange={handleChange} value={width}/>
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleApplyCanvasSize}>Confirm</button>
      </div>
    </Styled.NewFileDialogue>
  )
}

export default NewFileDialogue;
