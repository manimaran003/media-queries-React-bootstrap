import React from 'react'
import LogoComponent from './Componets/imageContainer/LogoComponent'
import LoginComponent from './Componets/LoginComponent/LoginComponent'
import './App.css'
const App = () => {
  return (
    <div className='container-fluid main-app'>
        <div className='row'>
          <div className='col-sm-7 col-md-12 col-lg-7 sideBar-logo'>
            <LogoComponent/>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-5 col-lg-5 sideBar-login'>
            <LoginComponent/>
          </div>
        </div>
    </div>
  )
}
export default App;