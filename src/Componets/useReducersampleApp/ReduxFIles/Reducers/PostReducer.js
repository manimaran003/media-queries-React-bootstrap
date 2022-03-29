import { ConnectedTvOutlined } from "@mui/icons-material";
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
        default:
            return state
    }
}