import React, { Dispatch } from 'react'
import { Styled } from './styles';
import { useDispatch } from 'react-redux';
import { CanvasActions } from '../../redux/actions/CanvasActions';

interface IProps {
  color: string;
  x: number;
  y: number;
}


const Pixel: React.FC<IProps> = ({ color, x, y}) => {

  const dispatch = useDispatch<Dispatch<CanvasActions>>();

  const handleChangePixelColor = (): void => {
    dispatch({ type: 'COLOR_PIXEL', pixel: { x, y }, color: '#FF0000'})
  }

  return (
    <Styled.Pixel color={color} onClick={handleChangePixelColor} />
  )
}

export default Pixel;
