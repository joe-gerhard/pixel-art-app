import React, { Dispatch, useRef } from 'react'
import { Styled } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'
import { ToolbarActions } from '../../redux/actions/ToolbarActions'

const HueSlider: React.FC = () => {

  const { colorPickerWidth, selectedHue } = useSelector((state: AppState) => state.toolbar)
  const toolbarDispatch = useDispatch<Dispatch<ToolbarActions>>();
  const hueSliderRef: React.Ref<HTMLDivElement> = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    let hue: number = 0;

    if(hueSliderRef.current) {
      // set hue to the location the user clicks on the hue slider div
      hue = (e.pageX - hueSliderRef.current.offsetLeft) / colorPickerWidth;
    }

    toolbarDispatch({ type: 'SET_SELECTED_HUE', hue })
  }

  return (
    <Styled.HueSlider ref={hueSliderRef} width={colorPickerWidth} onClick={handleClick}>
      <Styled.Indicator hue={selectedHue} width={colorPickerWidth}/>
    </Styled.HueSlider>
  )
}

export default HueSlider;