import React from 'react';
import { Styled } from './styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import Pixel from './Pixel';

const Canvas: React.FC = () => {

  const { pixels } = useSelector((state: AppState) => state.canvas)
  
  return (
    <Styled.Canvas>
      {pixels.map((row: string[], yIdx: number) => 
        <Styled.Row key={`r${yIdx}`}>
          {row.map((pixelColor: string, xIdx: number) =>
            <Pixel key={`${xIdx}${yIdx}`} color={pixelColor} x={xIdx} y={yIdx} />
          )}
        </Styled.Row>
      )}
    </Styled.Canvas>
  )
}

export default Canvas;
