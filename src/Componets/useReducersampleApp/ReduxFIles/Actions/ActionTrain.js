import { ActionTypes } from "../Constants/ActionTypes"
import axios from "axios"

export const loadCategories = categories => ({
    type: ActionTypes.GETtrain,
    categories
  });

export const getTrain=()=>{
    return async (dispatch)=>{
        let apiUrl="http://localhost:3006/Trains"
        axios.get(apiUrl)
        .then((res)=>{
            console.log("response=>get",res.data)
             dispatch({type:ActionTypes.GETtrain,data:res.data})
        })
        .catch((err)=>{
            console.log("api error")
        })
    }
}

export const addUser=(data)=>{
    let apiUrl="http://localhost:3005/users"
    return async(dispatch)=>{
        axios.post(apiUrl,data)
        .then((res)=>dispatch({type:ActionTypes.AddSuccess,payload:"successfully added"}))
        .catch((err)=>console.log("error"))
    }
}

export const deleteUser=(id)=>{
    let apiUrl=`http://localhost:3005/users/${id}`
    return async(dispatch)=>{
        axios.delete(apiUrl)
        .then((res)=>dispatch({type:ActionTypes.DELSuccess,payload:"successfully Deleted"}))
        .catch((err)=>console.log("error"))
    }
}
