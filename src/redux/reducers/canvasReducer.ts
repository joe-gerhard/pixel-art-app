import { CanvasActions } from '../actions/CanvasActions';
import _ from 'lodash';

export interface ICanvasState {
  height: number;
  width: number;
  pixels: string[][];
}

const initialCanvasState: ICanvasState = {
  height: 16,
  width: 16,
  pixels: drawPixels(),
}

export const canvasReducer = (
  state: ICanvasState = initialCanvasState,
  action: CanvasActions
): ICanvasState => {
  switch(action.type) {

    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.value,
      }

    case 'SET_WIDTH':
      return {
        ...state,
        width: action.value,
      }

    case 'DRAW_PIXELS':
      return {
        ...state,
        pixels: drawPixels(state.width, state.height)
      }

    case 'COLOR_PIXEL':
      const tempPixels = _.cloneDeep(state.pixels)
      tempPixels[action.pixel.y][action.pixel.x] = action.color
      return {
        ...state,
        pixels: tempPixels,
      }

    default: return state;
  }
}



function drawPixels(width: number = 16, height: number = 16): string[][] {

  let canvas: string[][] = [];

  for(let i = 0; i < height; i++) {

    let row: string[] = [];

    for(let j = 0; j < width; j++) {
      row.push('#FFFFFF');
    }

    canvas.push(row)
  }

  return canvas;
}