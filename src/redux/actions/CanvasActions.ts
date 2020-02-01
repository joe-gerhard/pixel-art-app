import { RGB } from "../../components/Toolbar/helpers";

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

export interface ICanvasColorPixelAction {
  readonly type: 'COLOR_PIXEL';
  pixel: {
    x: number;
    y: number;
  }
  color: RGB;
}


// ---- Action Types ---- //
export type CanvasActions = 
| ICanvasSetHeightAction 
| ICanvasSetWidthAction 
| ICanvasDrawPixelsAction
| ICanvasColorPixelAction
