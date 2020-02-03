
export interface ISetDialogueOpenAction {
  readonly type: 'SET_DIALOGUE_OPEN';
}

export interface ISetDialogueClosedAction {
  readonly type: 'SET_DIALOGUE_CLOSED';
}

export type MenuActions = 
| ISetDialogueOpenAction
| ISetDialogueClosedAction