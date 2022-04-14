import { ActionType } from './ActionType'
import axios from 'axios'

export const getBike = () => {
    return async (dispatch: any) => {
        await axios.get("http://localhost:3009/BIKE")
            .then((res: any) => {
                console.log("res", res)
                dispatch({ type: ActionType.GETAPI, payload: res.data })
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
}
export const AddBike = (data: any) => {
    console.log(data)
    return async (dispatch: any) => {
        await axios.post("http://localhost:3009/BIKE", data)
            .then((res: any) => {
                console.log("res", res)
                dispatch({ type: ActionType.POSTAPI, payload: res.data })
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
}