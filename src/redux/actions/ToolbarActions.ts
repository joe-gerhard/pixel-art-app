import { RGB } from '../../components/Toolbar/helpers'

export interface ISetSelectedColorAction {
  readonly type: 'SET_SELECTED_COLOR';
  color: RGB
}

export type ToolbarActions = 
| ISetSelectedColorAction