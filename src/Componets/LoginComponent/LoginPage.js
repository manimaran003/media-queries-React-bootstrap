import React, { useState } from "react";
const initialValues={
    username:""  ,
    password:"" 
}
const LoginPage = () => {
    const [state,setState]=useState(initialValues)
    const [errors,setErrors]=useState({})
    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const handleValidation=()=>{
        let errors={}
        const {username,password}=state
        if(username===""){
            errors.username="please input your username!"
        }
        else{
            errors.username=""
        }
        if(password===""){
            errors.password="please input your password!"
        }
        else{
            errors.password=""
        }
       return errors
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submitted")
      const error= handleValidation()
      console.log(Object.keys(error).length)
      if(Object.keys(error).length===0){
          console.log("ok")
      }
      else{
          setErrors(error)
      }
    }
    return (
        <>
            <div className="container textColor">
                <div className="">
                    <form>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="text" name="username" value={state.username} onChange={handleChange} className="form-control is-invalid" placeholder="Username" id="exampleFormControlInput1"/>
                            <div className="invalid-feedback">
                                {errors.username}
                           </div>
                        </div>
                        <label className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="password" name="password" value={state.password} onChange={handleChange} className="form-control is-invalid" placeholder="Password" aria-label="Username" id="exampleFormControlInput2" aria-describedby="basic-addon1" />
                            <div className="invalid-feedback">
                                {errors.password}
                           </div>
                        </div> 
                        <div className="d-flex justify-content-end mt-3">
                            <p>Forgot Password ?</p>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="button" onClick={handleSubmit} className="btn btn-lg btn-primary login-btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage