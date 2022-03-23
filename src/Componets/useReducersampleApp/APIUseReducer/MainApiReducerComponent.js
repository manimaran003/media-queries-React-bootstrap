import React, { useEffect ,useReducer,useContext} from 'react';
import { Box, Grid, Toolbar, AppBar, Paper, Card, CardContent, CardActions, Typography, Button,CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import ApiHeader from './ApiHeader'
import TrainComponentCard from './TrainComponentCard'
import SearchPaperComponent from './SearchPaperComponent';
import TrainReducer from './TrainReducer';
import AuthContext from './auth-context';


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
    const [StoreTrain,dispatch]=useReducer(TrainReducer,[])
    useEffect(()=>{
        axios.get('http://localhost:3006/Trains')
        .then((res)=>{
            console.log(res.data)
            return dispatch({type:"GETAPICALL",payload:res.data})
        })
        .catch((err)=>{
            console.log("error",err)
        })
    },[])
    const SearchFilter=(data)=>{
        console.log(data)
    }
    return (
        <>
        <AuthContext.Provider value={{
            search:SearchFilter
        }}>
            <Box>
                <AppBar className={classes.root}>
                    <Toolbar>
                        <ApiHeader />
                    </Toolbar>
                </AppBar>
                <Box sx={{ mt: 8 }}>
                    <Box className={classes.Hero}>
                        <Grid container>

                            <Grid item xs={4}>
                                <Box sx={{ p: 2 }}>
                                    <SearchPaperComponent/>
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ overflow: "yScroll" }}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container spacing={2}>
                                                {
                                                    StoreTrain.length!==0 && (
                                                        StoreTrain.map((train)=>{
                                                            return (
                                                                <React.Fragment key={train.id}>
                                                                     <Grid item xs={3}>
                                                                         <TrainComponentCard trainPass={train}/>
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