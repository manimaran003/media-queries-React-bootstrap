import { combineReducers } from "redux";
import { NextReducer } from "./NextReducer";
import { PostReducer } from "./PostReducer";

export const RootReducer=combineReducers({
    PostReducer,
    NextReducer
})