 import React from "react";
import {Box,Grid} from '@mui/material';
import { Typography } from "antd";
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    img:{
        width:"40px",
        height:"40px"
    },
    text:{
        color:"white",
        fontSize:"20px"
    }
})
const Header=()=>{
    const classes=useStyles()
    return(
        <>
       <Box sx={{display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"space-between",alignItems:"center"}}>
           <Box sx={{flexGrow:0.009,alignItems:"center"}}>
            <img className={classes.img} src="https://previews.123rf.com/images/ikalvi/ikalvi1712/ikalvi171200242/92412982-souriant-cr%C3%A9ation-de-logo-vectoriel-panier-d-achat-shopping-logo-vectoriel-ou-app-.jpg"/>
           </Box>
           <Box sx={{display:"flex", flexGrow:1,justifyContent:"center"}}>
               <Typography className={classes.text}>Amazon Shopping Mart</Typography>
           </Box>
       </Box>
        </>
    )
}

export default Header