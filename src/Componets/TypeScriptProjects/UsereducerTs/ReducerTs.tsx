import { ActionTypes } from "@mui/base";
import DataModel from "./DataModel"
const initState: DataModel[] = []
type ACTIONTYPE = { type: "GETAPI", payload: DataModel }
    | { type: "POSTAPI"; payload: DataModel }
    | { type: "PUTAPI", payload: DataModel }
    | { type: "DELETEAPI", payload: DataModel }

const ReducerTs = (state = initState, action: ACTIONTYPE) => {
    switch (action.type) {
        case "GETAPI":
            console.log("haiReducerget=>", action.payload)
            return [...action.payload]
        case "POSTAPI":
            return [...state, action.payload]
        case "PUTAPI":
            return [...state, action.payload]
        case "DELETEAPI":
            return [...state, action.payload]
    }
}
export default ReducerTs