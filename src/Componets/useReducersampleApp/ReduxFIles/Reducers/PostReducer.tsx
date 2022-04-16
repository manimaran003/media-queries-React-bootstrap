import { ActionTypes } from "../Constants/ActionTypes"
// const initialState={
// }
import ConvertTsGet from '../ConvertTsGet'
import ConvertTsModel from '../ConvertTsModel'
export const initialState:ConvertTsGet[] | ConvertTsModel[]=[]
type ACTIONTYPE= | {type:ActionTypes.GETtrain;data:ConvertTsGet[]}
| { type: ActionTypes.userTrain; data: ConvertTsModel[] }
| { type: ActionTypes.AddSuccess; data: string }
| { type: ActionTypes.DELSuccess; data: string }
| { type: ActionTypes.getError; data: string }

export const PostReducer=(state=initialState,action:ACTIONTYPE)=>{
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
                console.log('USERTRAIN',action.data)
                return {userTrain:action.data}
        default:
            return state
    }
}