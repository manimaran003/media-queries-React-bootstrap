import React from "react";
import LoginPage from "./LoginPage";
const Login =()=>{

return(
    <>
    <div className="container-fluid">
        <div className="container">
            <div className="col-12 text-center textColor">
                <h1>Welcome</h1>
                <p className="loginText2">Log in to your acount</p>
            </div>
            <div class="row">
                <div className="col-sm-2 ">
                </div>
                <div className="col-sm-8  d-flex justify-content-center">
                <LoginPage/>
                </div>
                <div className="col-sm-2 ">
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Login