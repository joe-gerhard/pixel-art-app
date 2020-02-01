import React, { useRef, Dispatch } from 'react'
import { Styled } from './styles';
import { getClickPosition, ClickPosition, HSV, HSVtoRGB, RGB } from './helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ToolbarActions } from '../../redux/actions/ToolbarActions';
import { AppState } from '../../redux/reducers/rootReducer';

const ColorPicker: React.FC = () => {

  const { colorPickerWidth, selectedHue } = useSelector((state: AppState) => state.toolbar);
  const toolbarDispatch = useDispatch<Dispatch<ToolbarActions>>();
  const colorPickerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleClick = ((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const clickPosition: ClickPosition = getClickPosition(e, colorPickerRef);
    const saturation: number = clickPosition.x / colorPickerWidth;
    const value: number = clickPosition.y / colorPickerWidth;
    const hsvObj: HSV = { h: selectedHue, s: saturation, v: value };
    const rgbObj: RGB = HSVtoRGB(hsvObj);
    toolbarDispatch({ type: 'SET_SELECTED_COLOR', color: rgbObj})
  })

  return <Styled.ColorPicker ref={colorPickerRef} onClick={handleClick} width={colorPickerWidth} hue={selectedHue * 360} />

}

export default ColorPicker;

