import * as React from 'react';
import { Styled } from './styles';
import ColorPicker from './ColorPicker';
import HueSlider from './HueSlider';

const Toolbar: React.FC = () => {
  return (
    <Styled.Toolbar>
      <ColorPicker />
      <HueSlider />
    </Styled.Toolbar>
  )
}

export default Toolbar;
