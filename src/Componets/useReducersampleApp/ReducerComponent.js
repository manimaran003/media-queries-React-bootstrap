import React, { useReducer, useState } from "react";
import { AppBar, Box, Toolbar, Grid, Card, Paper } from '@mui/material'
import Header from "./UI/Header";
import { makeStyles } from '@mui/styles';
import CardComponent from "./UI/CardComponent";
import { data } from './data'

let arr=[]

const useStyles = makeStyles({
    root: {
        background: "lightGreen", minHeight: "816px",
        padding:"15px"
    }
})
const ReducerComponnet = () => {
    const classes = useStyles()
    const [tblData,setTblData]=useState([])
    const HandleData=(currentData)=>{
     console.log(currentData)
     let currentValue= data.find((val)=>val.id===currentData)
     arr.push(currentValue)
     setTblData(arr)
    }
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Header />
                    </Toolbar>
                </AppBar>
                <Box sx={{ mt: 8 }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  className={classes.root}>
                            <Grid container>
                                <Grid item xs={12} md={12} lg={12} xl={12} >
                                    <Grid container spacing={4} >
                                        {
                                            data.map((items) => {
                                                return (
                                                    <React.Fragment key={items.id}>
                                                        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
                                                            <CardComponent data={items} passData={HandleData}/>
                                                        </Grid>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6} xl={6} >
                            {tblData.id}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default ReducerComponnet