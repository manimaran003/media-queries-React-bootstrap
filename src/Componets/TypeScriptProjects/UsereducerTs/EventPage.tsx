import React, { useEffect, useReducer } from 'react'
import { Box, Grid } from '@mui/material'
import BookEvent from './BookEvent.tsx'
import { makeStyles } from '@mui/styles'
import ReducerTs from './ReducerTs.tsx'
import TableComponent from './TableComponent.tsx'
import axios from 'axios'
const useStyles = makeStyles({
    root: {
        height: "800px",
        //  background: "orange"
    },
    alignBox: {
        display: "flex",
        justifyContent: "center",
        flexGrow: 1
    },
    btn: {
        background: "lightGreen",
        padding: "10px",
        marginTop: "20px",
        borderRadius: "50px",
        border: "2px solid lightGreen"
    },
})
const EventPage: React.FC = () => {
    const classes = useStyles();
    const [StoreEvent, dispatch] = useReducer(ReducerTs, [])
    console.log(StoreEvent)
    useEffect(() => {
        axios.get('http://localhost:3004/Events')
            .then((res: any) => {
                console.log(res.data)
                return dispatch({ type: "GETAPI", payload: res.data })
            })
            .catch((err: string) => {
                console.log(err)
            })
            .finally(() => {
                console.log("okay success or failed")
            })
    }, [])
    const BookNew = (state: {}): void => {
        (
            async () => {
                await axios.post("http://localhost:3004/Events", state)
                    .then((res: any) => {
                        dispatch({ type: "POSTAPI", payload: res.data })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        )();
    }
    return (
        <>
            <Box className={classes.root}>
                <Box sx={{ pt: 10 }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <BookEvent add={BookNew} />
                        </Grid>
                        <Grid item xs={6}>
                            <TableComponent store={StoreEvent} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default EventPage