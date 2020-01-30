import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { userInputReducer } from './userInputReducer';

const rootReducer = combineReducers({ 
  canvas: canvasReducer, 
  userInput: userInputReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
