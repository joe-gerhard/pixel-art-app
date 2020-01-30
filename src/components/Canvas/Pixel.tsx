import React, { Dispatch } from 'react'
import { Styled } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { CanvasActions } from '../../redux/actions/CanvasActions';
import { AppState } from '../../redux/reducers/rootReducer';

interface IProps {
  color: string;
  x: number;
  y: number;
}


const Pixel: React.FC<IProps> = ({ color, x, y}) => {

  const { mouseDown } = useSelector((state: AppState) => state.userInput);

  const dispatch = useDispatch<Dispatch<CanvasActions>>();

  const handleChangePixelColor = (): void => {
    dispatch({ type: 'COLOR_PIXEL', pixel: { x, y }, color: '#FF0000'})
  }

  const handleMouseEnter = (): void => {
    if(mouseDown) handleChangePixelColor()
  }

  return (
    <Styled.Pixel color={color} onClick={handleChangePixelColor} onMouseEnter={handleMouseEnter} />
  )
}

export default Pixel;
