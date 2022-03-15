import React from "react";
import LoginPage from "./LoginPage";
import Signup from './Signup'
const Login =()=>{
return(
    <>
    <div className="container-fluid">
            <div className="col-12 text-center textColor">
                <h1>Welcome</h1>
                <p className="loginText2">Log in to your acount</p>
            </div>
            <div className="row">
                <div className="col-sm-2 col-lg-2">
                </div>
                <div className="col-sm-8 col-md-8 col-lg-12 col-xl-8 d-flex justify-content-center">
                {/* <LoginPage/> */}
                <Signup/>
                </div>
                <div className="col-sm-2 col-md-0 col-lg-2 ">
                </div>
            </div>
    </div>
    </>
)
}

export default Login