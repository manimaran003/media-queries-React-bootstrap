import React from "react";
import {Grid,Box} from '@mui/material'
import { Navigate, useNavigate } from "react-router-dom";
import '../Home.scss'
const HomePage=()=>{
    let navigate=useNavigate()
    return(
        <>
        <div className="container-fluid main-header">
            <div className="container">
                <div className="d-flex justify-content-around pt-5">
                <div class="card" style={{width:"180px",height:"200px"}}>
                    <button onClick={()=>navigate("/reducerapp")} style={{width:"180px",height:"200px"}}>
                        useEffect and useReducer sample app
                    </button>
                </div>
                <div class="card" style={{width:"180px",height:"200px"}}>
                    <button style={{width:"180px",height:"200px"}}>
                        spirit1
                    </button>
                </div>
                <div class="card" style={{width:"180px",height:"200px"}}>
                    <button style={{width:"180px",height:"200px"}}>
                        spirit2
                    </button>
                </div>
                <div class="card" style={{width:"180px",height:"200px"}}>
                    <button style={{width:"180px",height:"200px"}}>
                        spirit3
                    </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomePage