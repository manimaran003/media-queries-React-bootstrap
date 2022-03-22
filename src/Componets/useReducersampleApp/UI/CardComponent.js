import { Card,CardMedia } from "@mui/material";
import React,{useContext, useState} from "react";
import {data} from '../MainPage/data'
import AuthContext from '../MainPage/auth-context'
const CardComponent=(props)=>{
    let authctx=useContext(AuthContext)
    const handleSubmit=(e,id)=>{
        e.preventDefault()
        //props.passData(id)
        authctx.add(id)
        // let currentValue= data.find((val)=>val.id===id)
        // console.log(currentValue)
        // props.passData({type:"ADDCART",payload:currentValue})
    }
    return (
        <>
        <Card sx={{ minWidth: 120,height:120 }} onClick={(e)=>handleSubmit(e,props.data.id)} >
        <CardMedia
        component="img"
        height="140"
        image={props.data.url}
        alt="green iguana"
      />
    </Card>
        </>
    )
}
export default CardComponent