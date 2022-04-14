import '../../../../Home.scss'
import React,{useEffect,useMemo} from 'react'
import { makeStyles } from '@mui/styles';
import {Box,Grid,CssBaseline} from '@mui/material'
import DrawerComponent from './DrawerComponent';
import {useDispatch,useSelector} from 'react-redux'
import { getBike } from '../ReduxStore/action';
import Model from '../ReduxStore/Model'
const useStyles=makeStyles({
    root:{
        minHeight:"855px",
        background:"#e6e6ff",
    },
})
const BikeTableTs = () => {
    const classes=useStyles()
    let dispatch:any=useDispatch()
    let BikeData=useSelector((state:Model[])=>state)
    useEffect(()=>{
        dispatch(getBike())
    },[])
    console.log(BikeData,"hello")
    return (
        <Box sx={{ }}>
            <CssBaseline />
             <Grid container>
                 <Grid item xs={0} sm={0} md={1.5} lg={1.5} xl={1.5}>
                <DrawerComponent/>
                 </Grid>
                 <Grid item xs={12} sm={12} md={10.5} lg={10.5} xl={10.5} >
                 <Box  component="main"  sx={{mt:7}}>
                     <Box className={classes.root}>
                     </Box>
                </Box> 
                 </Grid>
             </Grid>
        </Box>
    );
}

export default BikeTableTs