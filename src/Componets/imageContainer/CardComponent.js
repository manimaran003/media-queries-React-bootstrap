import React from "react";

const CardComponent=(props)=>{
    const {items}=props
    return(
        <div className="card" style={{width:"180px",height:"150px"}}>
        <div className="d-flex justify-content-center">
        <img style={{height:"100px",width:"100px"}}  className=""  src={items.src}alt="..." />
        </div>
        <button className="logo-button" style={{width:"100%",height:"50px"}}>Download</button>
      </div>
    )
}
export default CardComponent