import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../Home.scss'
const HomePage = () => {
    const [data, setRender] = useState({})
    let navigate = useNavigate()
    // i achieved component did mount in use effect
    useEffect(() => {
        let data = localStorage.getItem('NEWFILTER')
        let newData = JSON.parse(data)
        setRender(newData)
    }, [])
    return (
        <>
            <div className="container-fluid main-header">
                <div className="container">
                    {
                        data && (<>
                            <div className="d-flex justify-content-center">
                                <div className="card d-flex justify-content-center">
                                <div className="success">
                                    details of user now logged in this session
                                </div>
                                    <div>
                                        {data.email}
                                    </div>
                                    <div>
                                        {data.fname} 
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                    <div className="d-flex justify-content-around pt-5">
                        <div className="card" style={{ width: "180px", height: "200px" }}>
                            <button onClick={() => navigate("/reducerapp")} style={{ width: "180px", height: "200px" }}>
                                useEffect and useReducer sample app
                            </button>
                        </div>
                        <div className="card" style={{ width: "180px", height: "200px" }}>
                            <button onClick={() => navigate("/apireducer")} style={{ width: "180px", height: "200px" }}>
                               use reducer api call train admin 
                            </button>
                        </div>
                        <div className="card" style={{ width: "180px", height: "200px" }}>
                            <button onClick={() => navigate("/reduxapi")} style={{ width: "180px", height: "200px" }}>
                               Redux sample app train booking 
                            </button>
                        </div>
                        <div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage