import React from 'react'
import { Styled } from './styles'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'

const HueSlider: React.FC = () => {

  const { colorPickerWidth } = useSelector((state: AppState) => state.toolbar)

  return (
    <Styled.HueSlider width={colorPickerWidth}/>
  )
}

export default HueSlider;