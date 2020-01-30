import * as React from 'react';
import { Styled } from './styles';
import ColorPicker from './ColorPicker';

const Toolbar: React.FC = () => {
  return (
    <Styled.Toolbar>
      <ColorPicker />
    </Styled.Toolbar>
  )
}

export default Toolbar;
