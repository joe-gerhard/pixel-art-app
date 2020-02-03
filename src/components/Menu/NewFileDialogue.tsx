import React, { Dispatch, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { CanvasActions } from '../../redux/actions/CanvasActions';

const NewFileDialogue: React.FC = () => {

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
    <div>
      this is the new file dialogue
    </div>
  )
}

export default NewFileDialogue;
