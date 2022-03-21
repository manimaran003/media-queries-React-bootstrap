import React from "react";
import CardComponent from "./CardComponent";
const data=[
  {id:1,src:"data:image/png;base64,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",},
  {id:2,src:"https://pixlok.com/wp-content/uploads/2021/02/PhonePe-Logo-Svg.jpg",},
  {id:3,src:"https://yt3.ggpht.com/ytc/AKedOLRiJPGqjVLba5Xd81eEdsEaUXsEB9Q18HeX3wWtk5w=s900-c-k-c0x00ffffff-no-rj",},
]
const LogoComponent=()=>{
    return(
        <>
         <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                </div>
                <div className='col-sm-8 col-md-12 col-lg-12 col-xl-8 text-center'>
                  <img src='https://wallpaperaccess.com/full/2483954.jpg' style={{width:"70%"}}/>
                  <div className="container">
                      <div className=" col-12 text-center mt-5">
                        <h1>Online Shopping Mart</h1>
                        <p className="logoText">its our family by your Products</p>
                        <p className="logoText">effectively ! </p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-2'>
                </div>
              </div>
              <div className="row top">
               <div className="col-12">
                 <div className="container-fluid">
                   <div className="row">
                     {
                       data.map((item)=>{
                         return (
                           <div className="col-sm-3 col-md-3 col-lg-4 col-xl-4">
                             <CardComponent items={item}/>
                          </div>
                         )
                       })
                     }
                   </div>
                 </div>
               </div>
              </div>
            </div>
        </>
    )
}

export default LogoComponent