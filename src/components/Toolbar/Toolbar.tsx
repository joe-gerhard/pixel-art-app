import * as React from 'react';
import { Styled } from './styles';
import ColorPicker from './ColorPicker';
import HueSlider from './HueSlider';

const Toolbar: React.FC = () => {
  return (
    <Styled.Toolbar>
      <Styled.BorderWrapper>
        <ColorPicker />
        <HueSlider />
      </Styled.BorderWrapper>
    </Styled.Toolbar>
  )
}

export default Toolbar;
