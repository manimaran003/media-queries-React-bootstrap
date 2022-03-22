import React from "react";
import {Typography} from '@mui/material'
const ErrorComponent=(props)=>{
    return(
              <>
               <Typography sx={{color:"red"}}>{props.errorText}</Typography>
              </>
                   
    )        
}

export default ErrorComponent