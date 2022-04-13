import Model from '../Model'
import  {ActionType}  from '../ActionType'
export const initialState:Model[]=[]

type ACTIONTYPE= | {type:ActionType.GETAPI;payload:Model[]}
| { type: ActionType.GETAPI; payload: Model[] }
| { type: ActionType.POSTAPI; payload: Model[] }
| { type: ActionType.PUTAPI;payload: Model[] }

const ReducerComponent=(state=initialState,action:ACTIONTYPE)=>{
  switch (action.type){
      case ActionType.GETAPI:
          return [...action.payload]
      case ActionType.POSTAPI:
          return [...state ,action.payload]
          default:
              return state
  }

}

export default ReducerComponent