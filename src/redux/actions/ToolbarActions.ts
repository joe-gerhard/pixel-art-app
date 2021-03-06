import { RGB } from '../../components/Toolbar/helpers'

export interface ISetSelectedColorAction {
  readonly type: 'SET_SELECTED_COLOR';
  color: RGB
}

export interface ISetSelectedHueAction {
  readonly type: 'SET_SELECTED_HUE';
  hue: number;
}

export type ToolbarActions = 
| ISetSelectedColorAction
| ISetSelectedHueAction