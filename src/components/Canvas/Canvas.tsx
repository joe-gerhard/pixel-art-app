import React from 'react';
import { Styled } from './styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';

const Canvas: React.FC = () => {

  const { pixels } = useSelector((state: AppState) => state.canvas)
  
  return (
    <Styled.Canvas>
      {pixels.map((row: string[], rIdx: number) => 
        <Styled.Row key={`r${rIdx}`}>
          {row.map((pixelColor: string, cIdx: number) =>
            <Styled.Pixel key={`${cIdx}${rIdx}`} color={pixelColor} />
          )}
        </Styled.Row>
      )}
    </Styled.Canvas>
  )
}

export default Canvas;
