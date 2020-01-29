import React, { useState } from 'react';
import { Styled } from './styles';
import Canvas from '../Canvas';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

type canvasSize = {
  height: number;
  width: number;
}

const App: React.FC = () => {

  const [canvasSize, setCanvasSize] = useState<canvasSize>({
    height: 16,
    width: 16,
  })

  const [canvas, setCanvas] = useState<string[][]>(drawCanvas(canvasSize))

  return (
   <Styled.App>
     <Menu setCanvasSize={setCanvasSize} setCanvas={setCanvas} canvasSize={canvasSize}/>
     <Styled.Main>
      <Toolbar />
      <Canvas canvas={canvas}/>
     </Styled.Main>
   </Styled.App>
  );
}

export default App;

function drawCanvas(canvasSize: canvasSize): string[][] {

  let canvas: string[][] = [];

  for(let i = 0; i < canvasSize.height; i++) {

    let row: string[] = [];

    for(let j = 0; j < canvasSize.width; j++) {
      row.push('#FFFFFF');
    }

    canvas.push(row)
  }

  return canvas;
}
