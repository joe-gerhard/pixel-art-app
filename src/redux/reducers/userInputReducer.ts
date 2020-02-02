import { UserInputActions } from '../actions/UserInputActions';

export interface IUserInputState {
  mouseDown: boolean;
  mouseInsideColorPicker: boolean;
}

export const initialUserInputState: IUserInputState = {
  mouseDown: false,
  mouseInsideColorPicker: false,
}

export const userInputReducer = (
  state: IUserInputState = initialUserInputState,
  action: UserInputActions
  ) => {
    switch(action.type) {
      case 'SET_MOUSE_DOWN':
        return {
          ...state,
          mouseDown: true,
        }
      case 'SET_MOUSE_UP':
        return {
          ...state,
          mouseDown: false,
        }
      case 'SET_MOUSE_INSIDE_COLOR_PICKER':
        return {
          ...state, 
          mouseInsideColorPicker: true,
        }
      case 'SET_MOUSE_OUTSIDE_COLOR_PICKER':
        return {
          ...state,
          mouseInsideColorPicker: false,
        }
      default: 
      return state;
    }
}