import React, { useRef, Dispatch } from 'react'
import { Styled } from './styles';
import { getClickPosition, ClickPosition, HSV, HSVtoRGB, RGB } from './helpers';
import { useDispatch } from 'react-redux';
import { ToolbarActions } from '../../redux/actions/ToolbarActions';

const ColorPicker: React.FC = () => {

  const toolbarDispatch = useDispatch<Dispatch<ToolbarActions>>();
  const colorPickerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleClick = ((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const clickPosition: ClickPosition = getClickPosition(e, colorPickerRef);
    const saturation: number = clickPosition.x / 100;
    const value: number = clickPosition.y / 100;
    const hsvObj: HSV = { h: 0, s: saturation, v: value };
    const rgbObj: RGB = HSVtoRGB(hsvObj);
    toolbarDispatch({ type: 'SET_SELECTED_COLOR', color: rgbObj})
  })

  return (
    <Styled.ColorPicker ref={colorPickerRef} onClick={handleClick} />
  )
}

export default ColorPicker;

