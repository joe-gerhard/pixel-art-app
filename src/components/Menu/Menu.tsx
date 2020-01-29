import React, { MouseEvent, ChangeEvent } from 'react';
import { Styled } from './styles';

type IProps = {
  setCanvasSize: Function;
  setCanvas: Function;
  canvasSize: {
    height: number;
    width: number;
  }
}

const Menu: React.FC<IProps> = ({ setCanvasSize, setCanvas, canvasSize }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCanvasSize({
      ...canvasSize,
      [e.target.name]: e.target.value,
    })
  }

  const handleApplyToCanvas = (e: MouseEvent<HTMLButtonElement>): void => {

  }

  return (
    <Styled.Menu>
      <label htmlFor="width">width:</label>
      <input name="width" id="width" type="number" value={canvasSize.width} onChange={handleChange}/>
      <button name="fuck" onClick={handleApplyToCanvas}>Apply</button>
    </Styled.Menu>
  )
}

export default Menu;
