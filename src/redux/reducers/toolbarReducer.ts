import { RGB } from '../../components/Toolbar/helpers';
import { ToolbarActions } from '../actions/ToolbarActions';

export interface IToolBarState {
  selectedColor: RGB;
  selectedHue: number;
  colorPickerWidth: number;
}

export const initialToolBarState: IToolBarState = {
  selectedColor: { r: 0, g: 0, b: 0 },
  selectedHue: 0,
  colorPickerWidth: 200,
}

export const toolbarReducer = (
  state: IToolBarState = initialToolBarState,
  action: ToolbarActions
  ): IToolBarState => {
    switch(action.type) {
      case 'SET_SELECTED_COLOR':
        return {
          ...state,
          selectedColor: action.color,
        }
      case 'SET_SELECTED_HUE':
        return {
          ...state,
          selectedHue: action.hue,
        }
      default: 
        return state;
    }
}