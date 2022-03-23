import React,{useState,useContext} from 'react'
import {Box,Grid,Paper,Typography,TextField,Card,Button} from '@mui/material'
import { makeStyles } from '@mui/styles'
import AuthContext from './auth-context'
import { StarRate } from '@mui/icons-material'
const useStyles=makeStyles({
    text:{
        textAlign:"center",
        marginBottom:"40px",
        marginBottom:"20px !important"
    },
    btn:{
        width:"100%",
        background:"blue",
        marginTop:"20px !important"
    }

})
const SearchPaperComponent=()=>{
    let authCtx=useContext(AuthContext)
    const initialValues={
        from :"",
        to:""
    }
    const classes=useStyles()
    const [state,setState]=useState(initialValues)
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        authCtx.search(state)
    }
    return (
        <>
        <Box sx={{p:4}}>
            <Typography variant="h5" className={classes.text}>SearchTrains</Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField placeholder='From' name="from" value={state.from} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder='To' name="to" value={state.to} onChange={handleChange}/>
                    </Grid>
                    <Button className={classes.btn} onClick={handleSubmit}>Search</Button>
                </Grid>
        </Box>
        </>
    )
}
export default SearchPaperComponent

