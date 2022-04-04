import { ActionTypes } from "../Constants/ActionTypes"
import axios from "axios"

export const loadCategories = categories => ({
    type: ActionTypes.GETtrain,
    categories
  });
//admin train api call
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
            dispatch({type:ActionTypes.getError,data:"error"})
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

//train user get api call
export const getUser=()=>{
    let apiUrl=`http://localhost:3005/users`
    return async(dispatch)=>{
        axios.get(apiUrl)
        .then((res)=>{
            console.log("get called",res.data)
            dispatch({type:ActionTypes.userTrain,payload:res.data})
        })
        .catch((err)=>console.log("error",err))
    }   
}

export const editUser=(id,data)=>{
    console.log("firstcall before",data)
    let apiUrl=`http://localhost:3005/users/${id}`
    return async(dispatch)=>{
        await axios.put(apiUrl,data)
        .then((res)=>{
            console.log("firstcall after",data)
            //refreshing api call
            dispatch(getUser())
            dispatch({type:ActionTypes.EditUser,payload:"successfully edited data"})
        })
        .catch((err)=>{
            console.log("sample")
            console.log("error",err)
        }
       )
    }  
}