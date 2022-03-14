import React from "react";

const LoginPage = () => {
    return (
        <>
            <div className="container textColor">
                <div className="">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <div class="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" id="exampleFormControlInput1" aria-describedby="basic-addon1" />
                    </div>
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <div class="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Password" aria-label="Username" id="exampleFormControlInput1" aria-describedby="basic-addon1" />
                    </div>
                        <div className="d-flex justify-content-end mt-3">
                            <p>Forgot Password ?</p>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                        <button type="button" class="btn btn-lg btn-primary login-btn">Login</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage