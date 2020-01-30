import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';

const rootReducer = combineReducers({ 
  canvas: canvasReducer 
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
