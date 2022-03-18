import { Card,CardMedia } from "@mui/material";
import React,{useState} from "react";
const CardComponent=(props)=>{
    const handleSubmit=(e,data)=>{
        e.preventDefault()
        console.log(data)
        props.passData(data)
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