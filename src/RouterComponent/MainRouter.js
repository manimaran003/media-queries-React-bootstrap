import { Route, Router, Routes } from "react-router-dom";
import React from "react";
import LogoComponent from '../Componets/CssModuleslocalStorage/imageContainer/LogoComponent'
import LoginComponent from '../Componets/CssModuleslocalStorage/LoginComponent/LoginComponent'
import SignUpComponent from '../Componets/CssModuleslocalStorage/SignUpComponent/SignUpComponent'
import HomePage from "./HomePage";
import ReducerComponet from "../Componets/useReducersampleApp/ReducerComponent";
const SubRouter = () => {
    return (
        <div className='container-fluid main-app'>
            <div className='row'>
                <div className='col-sm-7 col-md-12 col-lg-7 sideBar-logo'>
                    <LogoComponent />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-5 col-lg-5 sideBar-login'>
                    <Routes>
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/signup" element={<SignUpComponent />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<SubRouter />} />
                <Route path="/homepage" element={<HomePage/>}/>
                <Route path="/reducerapp" element={<ReducerComponet/>}/>
            </Routes>
        </>
    )
    }
export default MainRouter



