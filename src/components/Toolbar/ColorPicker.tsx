import React, { useRef, Dispatch, useState } from 'react'
import { Styled } from './styles';
import { getClickPosition, ClickPosition, HSV, HSVtoRGB, RGB } from './helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ToolbarActions } from '../../redux/actions/ToolbarActions';
import { AppState } from '../../redux/reducers/rootReducer';
import { UserInputActions } from '../../redux/actions/UserInputActions';

const ColorPicker: React.FC = () => {

  const { colorPickerWidth, selectedHue } = useSelector((state: AppState) => state.toolbar);
  const { mouseDown, mouseInsideColorPicker } = useSelector((state: AppState) => state.userInput);

  const toolbarDispatch = useDispatch<Dispatch<ToolbarActions>>();
  const userInputDispatch = useDispatch<Dispatch<UserInputActions>>();
  const colorPickerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [ saturation, setSaturation ] = useState<number>(0);
  const [ value, setValue ] = useState<number>(0);

  const handleMouseDown = ((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {

    userInputDispatch({ type: 'SET_MOUSE_DOWN'});

    const clickPosition: ClickPosition = getClickPosition(e, colorPickerRef);
    const saturation = clickPosition.x / colorPickerWidth
    const value = clickPosition.y / colorPickerWidth

    setValue(value);
    setSaturation(saturation);

  })

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {

    userInputDispatch({ type: 'SET_MOUSE_UP'});

    const hsvObj: HSV = { h: selectedHue, s: saturation, v: value };
    const rgbObj: RGB = HSVtoRGB(hsvObj);

    toolbarDispatch({ type: 'SET_SELECTED_COLOR', color: rgbObj})

  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    userInputDispatch({ type: 'SET_MOUSE_OUTSIDE_COLOR_PICKER' });
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    userInputDispatch({ type: 'SET_MOUSE_INSIDE_COLOR_PICKER'});
  }

  return (
    <Styled.ColorPicker 
      ref={colorPickerRef} 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp}
      width={colorPickerWidth} 
      hue={selectedHue * 360} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.ColorIndicator value={value} saturation={saturation} width={colorPickerWidth} />
    </Styled.ColorPicker>
  )
}

export default ColorPicker;

