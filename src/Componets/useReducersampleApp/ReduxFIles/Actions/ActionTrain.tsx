import { ActionTypes } from "../Constants/ActionTypes"
import axios from "axios"

export const getTrain=()=>{
    return async (dispatch:any)=>{
        let apiUrl:string="http://localhost:3006/Trains"
        axios.get(apiUrl)
        .then((res:any)=>{
            console.log("response=>get",res.data)
             dispatch({type:ActionTypes.GETtrain,data:res.data})
            
        })
        .catch((_err:any)=>{
            console.log("api error")
            dispatch({type:ActionTypes.getError,data:"error"})
        })
    }
}

export const addUser=(data:any)=>{
    let apiUrl:string="http://localhost:3005/users"
    return async(dispatch:any)=>{
        axios.post(apiUrl,data)
        .then((_res)=>dispatch({type:ActionTypes.AddSuccess,payload:"successfully added"}))
        .catch((_err)=>console.log("error"))
    }
}

export const deleteUser=(id:string)=>{
    let apiUrl:string=`http://localhost:3005/users/${id}`
    return async(dispatch:any)=>{
        axios.delete(apiUrl)
        .then((_res:any)=>dispatch({type:ActionTypes.DELSuccess,payload:"successfully Deleted"}))
        .catch((_err:any)=>console.log("error"))
    }
}

export const getUser=()=>{
    let apiUrl:string=`http://localhost:3005/users`
    return async(dispatch:any)=>{
        axios.get(apiUrl)
        .then((res:any)=>{
            console.log("get called",res.data)
            dispatch({type:ActionTypes.userTrain,data:res.data})
        })
        .catch((err:any)=>console.log("error",err))
    }   
}

export const editUser=(id:string,data:any)=>{
    console.log("firstcall before",data)
    let apiUrl=`http://localhost:3005/users/${id}`
    return async(dispatch:any)=>{
        await axios.put(apiUrl,data)
        .then((_res:any)=>{
            console.log("firstcall after",data)
            dispatch(getUser())
            dispatch({type:ActionTypes.EditUser,payload:"successfully edited data"})
        })
        .catch((err:any)=>{
            console.log("sample")
            console.log("error",err)
        }
       )
    }  
}