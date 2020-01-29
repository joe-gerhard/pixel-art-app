import React from 'react';
import { Styled } from './styles';

type IProps = {
  canvas: string[][];
}

const Canvas: React.FC<IProps> = ({ canvas }) => {

  return (
    <Styled.Canvas>
      {canvas.map((row: string[], rIdx: number) => 
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
