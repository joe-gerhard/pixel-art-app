import { MenuActions } from '../actions/MenuActions';

export interface MenuState {
  dialogueOpen: boolean;
}

export const initialMenuState: MenuState = {
  dialogueOpen: false,
}

export const menuReducer = (
  state: MenuState = initialMenuState,
  action: MenuActions
  ): MenuState => {
    switch(action.type) {
      case 'SET_DIALOGUE_OPEN': {
        return {
          ...state,
          dialogueOpen: true,
        }
      }
      case 'SET_DIALOGUE_CLOSED': {
        return {
          ...state,
          dialogueOpen: false,
        }
      }
        
      default: 
        return state;
    }
}