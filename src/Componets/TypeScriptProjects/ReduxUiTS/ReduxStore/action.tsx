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

export const EditBike=(data:any)=>{
    console.log("da",data)
    return async(dispatch:any)=>{
        await axios.put(`http://localhost:3009/BIKE/${data[1]}`,data[0])
        .then((res:any)=>{
            dispatch({type:ActionType.PUTAPI,payload:"successfully edited"})
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }
}

export const DeleteBike=(id:string)=>{
    console.log("da",id)
    return async(dispatch:any)=>{
        await axios.delete(`http://localhost:3009/BIKE/${id}`)
        .then((res:any)=>{
            dispatch({type:ActionType.DELETE,payload:"successfully deleted"})
            dispatch(getBike())
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }
}