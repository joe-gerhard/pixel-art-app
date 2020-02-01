import React, { Dispatch } from 'react'
import { Styled } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { CanvasActions } from '../../redux/actions/CanvasActions';
import { AppState } from '../../redux/reducers/rootReducer';
import { RGB } from '../Toolbar/helpers';

interface IProps {
  color: RGB;
  x: number;
  y: number;
}


const Pixel: React.FC<IProps> = ({ color, x, y }) => {

  const { mouseDown } = useSelector((state: AppState) => state.userInput);
  const { selectedColor } = useSelector((state: AppState) => state.toolbar);

  const dispatch = useDispatch<Dispatch<CanvasActions>>();

  const handleChangePixelColor = (): void => {
    dispatch({ type: 'COLOR_PIXEL', pixel: { x, y }, color: selectedColor})
  }

  const handleMouseEnter = (): void => {
    if(mouseDown) handleChangePixelColor()
  }

  return (
    <Styled.Pixel color={color} onMouseDown={handleChangePixelColor} onMouseEnter={handleMouseEnter} />
  )
}

export default Pixel;
