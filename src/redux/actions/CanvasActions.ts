
// ---- Action Constants ---- //
export enum CanvasActionTypes {
  SET_HEIGHT = 'SET_HEIGHT',
  SET_WIDTH = 'SET_WIDTH',
  DRAW_PIXELS = 'DRAW_PIXELS',
}


// ---- Action Interfaces ---- //
export interface ICanvasSetHeightAction {
  readonly type: 'SET_HEIGHT';
  value: number;
}

export interface ICanvasSetWidthAction {
  readonly type: 'SET_WIDTH';
  value: number;
}

export interface ICanvasDrawPixelsAction {
  readonly type: 'DRAW_PIXELS';
}


// ---- Action Types ---- //
export type CanvasActions = 
| ICanvasSetHeightAction 
| ICanvasSetWidthAction 
| ICanvasDrawPixelsAction


// ---- Actions ---- //
export const setHeight = (height: number) => ({
  type: CanvasActionTypes.SET_HEIGHT,
  payload: height,
})

export const setWidth = (width: number) => ({
  type: CanvasActionTypes.SET_WIDTH,
  payload: width,
})

export const drawPixels = () => ({
  type: CanvasActionTypes.DRAW_PIXELS
})


// --- Inferred Action Types ---- //
export type CanvasActionsInferred = 
| ReturnType<typeof setHeight>
| ReturnType<typeof setWidth>
| ReturnType<typeof drawPixels>
