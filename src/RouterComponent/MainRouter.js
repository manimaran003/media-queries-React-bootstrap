import { Route, Router, Routes } from "react-router-dom";
import React,{Suspense} from "react";
import LogoComponent from '../Componets/CssModuleslocalStorage/imageContainer/LogoComponent'
import LoginComponent from '../Componets/CssModuleslocalStorage/LoginComponent/LoginComponent'
import SignUpComponent from '../Componets/CssModuleslocalStorage/SignUpComponent/SignUpComponent'
import HomePage from "./HomePage";
import ReducerComponet from '../Componets/useReducersampleApp/MainPage/ReducerComponent'
import MainApiReducerComponent from '../Componets/useReducersampleApp/APIUseReducer/MainApiReducerComponent'
//import TrainRedux from "../Componets/useReducersampleApp/ReduxApp/TrainRedux";
import Header from '../Componets/useReducersampleApp/APIUseReducer/ApiHeader'
import { Toolbar,AppBar,Box } from "@mui/material";
import BookTrain from '../Componets/useReducersampleApp/ReduxApp/TrainUi/BookTrain'
import { AppState } from "../Componets/useReducersampleApp/Mobx/AppState";
import SampleCounter from "../Componets/useReducersampleApp/Mobx/SampleCounter";
import EventPage from '../Componets/TypeScriptProjects/UsereducerTs/EventPage.tsx'
import MainTodo from '../Componets/TypeScriptProjects/SampleTutorialTs/MainTodo.tsx'
const TrainRedux=React.lazy(()=>import("../Componets/useReducersampleApp/ReduxApp/TrainRedux"))
const SubRouter = () => {
    return (
        <div>
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
        </div>
    )
}
const MainRouter = () => {
    return (
        <>
         <Suspense fallback={<p>...loading</p>}>
        <header>
            <Box>
                <AppBar position="fixed">
                    <Toolbar>
                        <Header/>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
        
        <Routes>
                <Route path="*" element={<SubRouter />} />
                <Route path="/homepage" element={<HomePage/>}/>
                <Route path="/reducerapp" element={<ReducerComponet/>}/>
                <Route path="/apireducer" element={<MainApiReducerComponent/>}/>
                <Route path="/reduxapi" element={<TrainRedux/>}/>
                <Route path="/bookTrain/:id" element={<BookTrain/>}/>
                <Route path="/mobxApp" element={<SampleCounter store={AppState} />}/>
                <Route path="/typeEvent" element={<EventPage/>}/>
                <Route path="/todoTs" element={<MainTodo/>}/>
            </Routes>
            </Suspense>
            </>
    )
    }
export default MainRouter



