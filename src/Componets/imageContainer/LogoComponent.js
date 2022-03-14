import React from "react";
import CardComponent from "./CardComponet";

const LogoComponent=()=>{
    return(
        <>
         <div className='container'>
              <div className='row'>
                <div className='col-sm-2 col-md-0'>
                </div>
                <div className='col-sm-8 col-md-12 col-lg-12'>
                  <img src='https://app.clockmonk.com/app/static/media/worktime.b9ee74e5.png' />
                  <div className="container">
                      <div className="col-12 text-center">
                        <h1>Simple Time Tracking Tool</h1>
                        <p className="logoText">Manage your remote teams</p>
                        <p className="logoText">effectively ! </p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-2 col-md-0'>
                </div>
              </div>
            </div>
        </>
    )
}

export default LogoComponent