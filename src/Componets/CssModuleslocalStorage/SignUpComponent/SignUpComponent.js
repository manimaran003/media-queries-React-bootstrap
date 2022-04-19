import React from "react";
import Signup from './Signup'
const SignUpComponent = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-12 text-center textColor">
                    <h1>Welcome</h1>
                    <p className="loginText2">lets start by signing up</p>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-lg-2">
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-12 col-xl-8 d-flex justify-content-center">
                        <Signup />
                    </div>
                    <div className="col-sm-2 col-md-0 col-lg-2 ">
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpComponent