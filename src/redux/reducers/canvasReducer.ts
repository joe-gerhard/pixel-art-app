import { CanvasActions } from '../actions/CanvasActions';
import _ from 'lodash';
import { RGB } from '../../components/Toolbar/helpers';

export interface ICanvasState {
  height: number;
  width: number;
  pixels: RGB[][];
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



function drawPixels(width: number = 16, height: number = 16): RGB[][] {

  let canvas: RGB[][] = [];

  for(let i = 0; i < height; i++) {

    let row: RGB[] = [];

    for(let j = 0; j < width; j++) {
      let color: RGB = { r: 255, g: 255, b: 255 }
      row.push(color);
    }

    canvas.push(row)
  }

  return canvas;
}