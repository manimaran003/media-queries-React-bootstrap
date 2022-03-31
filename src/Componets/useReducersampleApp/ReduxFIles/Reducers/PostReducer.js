import { ActionTypes } from "../Constants/ActionTypes"
const initialState={
}
export const PostReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.GETtrain:
            return {trips:action.data}
         case ActionTypes.DELSuccess:
            return {delete:action.data}
            case ActionTypes.AddSuccess:
            return {add:action.data}
            case ActionTypes.getError:
                return {error:action.data}
            case ActionTypes.userTrain:
                console.log('USERTRAIN',action.payload)
                return {userTrain:action.payload}
        default:
            return state
    }
}