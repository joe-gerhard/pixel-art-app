import React from 'react'
import { Styled } from './styles';

const ColorPicker: React.FC = () => {

  const colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

  return (
    <Styled.ColorPicker>
      {colors.map(color => 
        <Styled.Pixel color={color} />
      )}
    </Styled.ColorPicker>
  )
}

export default ColorPicker;
