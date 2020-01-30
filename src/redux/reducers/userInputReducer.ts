import { UserInputActions } from '../actions/UserInputActions';

export interface IUserInputState {
  mouseDown: boolean;
}

export const initialUserInputState: IUserInputState = {
  mouseDown: false,
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
      default: 
      return state;
    }
}