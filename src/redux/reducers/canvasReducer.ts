import { 
  CanvasActions, 
  CanvasActionTypes,
} from '../actions/CanvasActions';

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

    case CanvasActionTypes.SET_HEIGHT:
      return {
        ...state,
        height: action.value,
      }

    case CanvasActionTypes.SET_WIDTH:
      return {
        ...state,
        width: action.value,
      }

    case CanvasActionTypes.DRAW_PIXELS:
      return {
        ...state,
        pixels: drawPixels(state.width, state.height)
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