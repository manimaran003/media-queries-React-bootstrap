import React from 'react'
import LogoComponent from './Componets/imageContainer/LogoComponent'
import LoginComponent from './Componets/LoginComponent/LoginComponent'
import './App.css'
const App = () => {
  return (
    <div className='container-fluid main-app'>
      <div className='containr-fluid'>
        <div className='row'>
          <div className='col-sm-7  sideBar-logo'>
            <LogoComponent/>
          </div>
          <div className='col-sm-5  sideBar-login'>
            <LoginComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;