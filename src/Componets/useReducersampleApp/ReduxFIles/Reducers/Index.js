import  ThunkMiddleware  from "redux-thunk";
import logger from "redux-logger";
import { createStore,applyMiddleware } from "redux";
import { RootReducer } from "./RootReducer";

const middleware=[ThunkMiddleware,logger]

function configureStore(initalState){
    return createStore(RootReducer,initalState,applyMiddleware(...middleware))
}
const store=configureStore()
export default store