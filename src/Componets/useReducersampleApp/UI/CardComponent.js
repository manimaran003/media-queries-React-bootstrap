import { Card,CardMedia } from "@mui/material";
import React,{useContext} from "react";
import AuthContext from '../MainPage/auth-context'
const CardComponent=(props)=>{
    let authctx=useContext(AuthContext)
    const handleSubmit=(e,id)=>{
        e.preventDefault()
       
        authctx.add(id)

    }
    return (
        <Card sx={{ minWidth: 120,height:120 }} onClick={(e)=>handleSubmit(e,props.data.id)} >
        <CardMedia
        component="img"
        height="140"
        image={props.data.url}
        alt="green iguana"
      />
    </Card>
    )
}
export default CardComponent