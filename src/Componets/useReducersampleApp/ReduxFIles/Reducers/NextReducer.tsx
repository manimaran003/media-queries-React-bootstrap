import { ActionTypes } from "../Constants/ActionTypes"
//const initialState={}
import ConvertTsGet from '../ConvertTsGet'
import ConvertTsModel from '../ConvertTsModel'
export const initialState:ConvertTsGet[] | ConvertTsModel[]=[]
type ACTIONTYPE= | {type:ActionTypes.GETtrain;data:ConvertTsGet[]}
| { type: ActionTypes.userTrain; data: ConvertTsModel[] }
| { type: ActionTypes.AddSuccess; data: string }
| { type: ActionTypes.DELSuccess; data: string }
| { type: ActionTypes.getError; data: string }
| { type: ActionTypes.EditUser; data: string }
export const NextReducer=(state=initialState,action:ACTIONTYPE)=>{
    switch(action.type){
        case ActionTypes.EditUser:
            return {success:action.data}
        default:
            return state
    }
}