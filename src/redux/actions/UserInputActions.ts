
// ---- Action Interfaces ---- //
export interface ISetMouseDownAction {
  type: 'SET_MOUSE_DOWN';
}

export interface ISetMouseUpAction {
  type: 'SET_MOUSE_UP';
}

export interface ISetMouseInsideColorPickerAction {
  type: 'SET_MOUSE_INSIDE_COLOR_PICKER'
}

export interface ISetMouseOutsideColorPickerAction {
  type: 'SET_MOUSE_OUTSIDE_COLOR_PICKER'
}

// ---- Action Types ---- //
export type UserInputActions =
| ISetMouseDownAction
| ISetMouseUpAction
| ISetMouseInsideColorPickerAction
| ISetMouseOutsideColorPickerAction