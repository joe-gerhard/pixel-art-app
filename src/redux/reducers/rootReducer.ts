import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { userInputReducer } from './userInputReducer';
import { toolbarReducer } from './toolbarReducer';
import { menuReducer } from './menuReducer'; 

const rootReducer = combineReducers({ 
  canvas: canvasReducer, 
  userInput: userInputReducer,
  toolbar: toolbarReducer,
  menu: menuReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
