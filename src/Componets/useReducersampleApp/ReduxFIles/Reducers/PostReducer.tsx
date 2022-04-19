import { ActionTypes } from "../Constants/ActionTypes"
import ConvertTsGet from '../ConvertTsGet'
import ConvertTsModel from '../ConvertTsModel'
import Model from '../../../TypeScriptProjects/ReduxUiTS/ReduxStore/Model'
export const initialState:ConvertTsGet[] | ConvertTsModel[] | Model[]=[]
type ACTIONTYPE= | {type:ActionTypes.GETtrain;data:ConvertTsGet[]}
| { type: ActionTypes.userTrain; data: ConvertTsModel[] }
| { type: ActionTypes.AddSuccess; data: string }
| { type: ActionTypes.DELSuccess; data: string }
| { type: ActionTypes.getError; data: string }
| {type:ActionTypes.GETAPI;payload:Model[]}
| { type: ActionTypes.GETAPI; payload: Model[] }
| { type: ActionTypes.POSTAPI; payload: Model[] }
| { type: ActionTypes.PUTAPI;payload: Model[] }

export const PostReducer=(state=initialState,action:ACTIONTYPE )=>{
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


export const ReducerComponent=(state=initialState,action:ACTIONTYPE)=>{
    switch (action.type){
        case ActionTypes.GETAPI:
            return [...action.payload]
        case ActionTypes.POSTAPI:
            return [...state ,action.payload]
            default:
                return state 
    }
  
  }

