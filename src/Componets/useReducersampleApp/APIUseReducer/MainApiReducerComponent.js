import React, { useEffect, useReducer, useContext, useState } from 'react';
import { Box, Grid, Toolbar, AppBar, Paper, Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import ApiHeader from './ApiHeader'
import TrainComponentCard from './TrainComponentCard'
import SearchPaperComponent from './SearchPaperComponent';
import TrainReducer from './TrainReducer';
import AuthContext from './auth-context';
// import {toast} from 'react-toastify'
// import {toastStyles} from './toastStyles'
import { ToastContainer, toast } from 'react-toastify';


const useStyles = makeStyles({
    root: {
        background: "lightGreen !important"
    },
    Hero: {
        minHeight: "816px",
    }
})

const MainApiReducerComponent = () => {
    const classes = useStyles()
    const [StoreTrain, dispatch] = useReducer(TrainReducer, [])
    const [refreshApi, setRefreshApi] = useState(false)
    console.log('storetrain', StoreTrain)
    useEffect(() => {
        axios.get('http://localhost:3006/Trains')
            .then((res) => {
                console.log(res.data)
                return dispatch({ type: "GETAPICALL", payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                toast("error in api")
            })
            .finally(()=>{
                console.log("okay success or failed")
            })
    }, [])

    const refres = () => {
        axios.get('http://localhost:3006/Trains')
            .then((res) => {
                console.log(res.data)
                return dispatch({ type: "GETAPICALL", payload: res.data })
            })
            .catch((err) => {
                console.log("error", err)
            })
    }

    const SearchFilter = (data) => {
        //console.log(data.from)
        dispatch({ type: "SEARCHAPI", payload: data.from })
    }
    const AddNewTrain = (data) => {
        (async () => {
            await axios.post(`http://localhost:3006/Trains`, data)
                .then((res) => {
                    if (res.status === 201)
                        toast("successfully added new train")
                    return dispatch({ type: "ADDAPI", payload: res.data })
                })
                .catch((err) => {
                    console.log(err)
                    toast("error added new train")
                })
        })()
        
    }
    const DeleteTrain = (id) => {
        (async () => {
            await axios.delete(`http://localhost:3006/Trains/${id}`)
                .then((res) => {
                    if (res.status === 200) {
                        toast("successfully train deleted")
                    }
                    return dispatch({ type: "DELETEAPI", payload: id })
                })
                .catch((err) => {
                    toast("error in train deleted")
                })
        })()
    }
    const EditTrain = (id, data) => {
        (
            async () => {
                await axios.put(`http://localhost:3006/Trains/${id}`, data)
                    .then((res) => {
                        const temp = {
                            ...data,
                            id: id
                        }
                        if (res.status === 200) {
                            toast("successfully edited train")
                            refres()

                        }
                        //setRefreshApi(true)
                        //return dispatch({ type: "EDITAPI", payload: temp })
                    })
                    .catch((err) => {
                        toast("error in editing api")
                    })
            }
        )()
    }
    return (
        <>
            <AuthContext.Provider value={{
                search: SearchFilter,
                add: AddNewTrain,
                delete: DeleteTrain,
                edit: EditTrain,
            }}>
                <Box>
                    {/* <AppBar className={classes.root}>
                        <Toolbar>
                            <ApiHeader />
                        </Toolbar>
                    </AppBar> */}
                    <Box sx={{ mt: 8 }}>
                        <Box className={classes.Hero}>
                            <Grid container>

                                <Grid item xs={4}>
                                    <Box sx={{ p: 2 }}>
                                        <SearchPaperComponent />
                                    </Box>
                                    <ToastContainer />
                                </Grid>
                                <Grid item xs={8}>
                                    <Box sx={{ overflow: "yScroll",mt:6,mr:2}}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Grid container spacing={2}>
                                                    {
                                                        StoreTrain.length !== 0 && (
                                                            StoreTrain.map((train) => {
                                                                return (
                                                                    <React.Fragment key={train.id}>
                                                                        <Grid item xs={3}>
                                                                            <TrainComponentCard trainPass={train} />
                                                                        </Grid>
                                                                    </React.Fragment>
                                                                )
                                                            })
                                                        )
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </AuthContext.Provider>
        </>
    )
}

export default MainApiReducerComponent;

