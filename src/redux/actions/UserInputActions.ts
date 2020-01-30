
// ---- Action Interfaces ---- //
export interface ISetMouseDownAction {
  type: 'SET_MOUSE_DOWN';
}

export interface ISetMouseUpAction {
  type: 'SET_MOUSE_UP';
}


// ---- Action Types ---- //
export type UserInputActions =
| ISetMouseDownAction
| ISetMouseUpAction