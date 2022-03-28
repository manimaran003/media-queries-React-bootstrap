import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography, Button } from '@mui/material'
const useStyles = makeStyles({
    root: {
        marginTop: "50px",
        background:"rgb(2,0,36)",
background: "linear-gradient(139deg, rgba(2,0,36,1) 0%, rgba(191,232,227,1) 0%, rgba(255,255,255,1) 99%, rgba(0,251,156,1) 100%);",
        height:"860px"
    }
})
const BookTrain = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Box sx={{ p: 5 }}>
                    <Grid container>
                        <Grid item xs={6}>
                            add book train
                        </Grid>
                        <Grid item xs={6}>
                            show which train details booked
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default BookTrain