import { combineReducers } from 'redux';
import { NextReducer } from './NextReducer';
import { PostReducer, ReducerComponent } from './PostReducer';

export const RootReducer = combineReducers({
  PostReducer,
  NextReducer,
  ReducerComponent
});


export  type IRootState = ReturnType<typeof RootReducer>;