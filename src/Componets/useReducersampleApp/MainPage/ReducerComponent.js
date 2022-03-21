import React, { useEffect, useReducer, useState } from "react";
import { AppBar, Box, Toolbar, Grid, Card, Paper, Typography, } from '@mui/material'
import Header from "../UI/Header";
import { makeStyles } from '@mui/styles';
import CardComponent from "../UI/CardComponent";
import { data } from './data'
import TableComponent from "./TableComponent";
import ProductReducers from "./ProductReducer";
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        background: "lightGreen", minHeight: "816px",
        padding: "15px"
    },
    show: {
        display: "flex",
        justifyContent: "center",
    },
    text: {
        fontSize: "25px",
        color: "black"
    },
    cart: {
        marginTop: "30px !important",
        color: "green",
        fontSize: "25px"
    }
})

const ReducerComponent = () => {
    const classes = useStyles()
    const [StoreProducts, dispatch] = useReducer(ProductReducers, [])
    // useEffect(()=>{
    // },[newCurrent])
    const HandleData = (currentData) => {
        let currentValue = data.find((val) => val.id === currentData)
        dispatch({ type: "ADDCART", payload: currentValue })
    }
    const handleDelete = (item) => {
        dispatch({ type: "REMOVECART", payload: item.id })
    }
    const handleEdit = (item) => {
        dispatch({ type: "EDITCART", payload: item })
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
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.root}>
                            <Grid container>
                                <Grid item xs={12} md={12} lg={12} xl={12} >
                                    <Grid container spacing={4} >
                                        {
                                            data.map((items) => {
                                                return (
                                                    <React.Fragment key={items.id}>
                                                        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
                                                            <CardComponent data={items} passData={HandleData} />
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
                        <Link to="/Homepage"><Typography sx={{mt:2}}>GoBack</Typography></Link>
                            <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                                <Typography variant="h5" className={classes.cart} >My Cart Details</Typography>
                            </Box>
                            <Box sx={{ p: 3 }}>
                                {
                                    StoreProducts.length === 0 ? (<Box className={classes.show}><Typography variant="h5" className={classes.text}>Nothing in the cart please buy a products</Typography></Box>) :
                                        (
                                            <TableComponent data={StoreProducts} DeleteData={handleDelete} parent={handleEdit} />
                                        )
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default ReducerComponent