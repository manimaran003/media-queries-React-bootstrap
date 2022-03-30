import { ActionTypes } from "../Constants/ActionTypes"
const initialState={}
export const NextReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.EditUser:
            return {success:action.payload}
        default:
            return state
    }
}