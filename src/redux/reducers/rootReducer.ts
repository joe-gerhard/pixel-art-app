import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { userInputReducer } from './userInputReducer';
import { toolbarReducer } from './toolbarReducer';

const rootReducer = combineReducers({ 
  canvas: canvasReducer, 
  userInput: userInputReducer,
  toolbar: toolbarReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
