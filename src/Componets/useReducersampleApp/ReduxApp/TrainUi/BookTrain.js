import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography, Button, FormControl, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import ProcessedCard from "./ProcessedCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const InputBox = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fcfcfb',
        border: '1px solid #ced4da !important',
        fontSize: 16,
        width: "100%",
        padding: '20px 22px',
        marginTop: "10px",
        marginBottom: "10px"
    }
}))

const useStyles = makeStyles({
    root: {
        marginTop: "50px",
        background: "rgb(2,0,36)",
        background: "linear-gradient(139deg, rgba(2,0,36,1) 0%, rgba(191,232,227,1) 0%, rgba(255,255,255,1) 99%, rgba(0,251,156,1) 100%);",
        height: "860px"
    },
    text: {
        paddingBottom: "20px",
        justifyContent: "center",
        display: "flex"
    },
    bookBox: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center"
    },
})
const BookTrain = () => {
    const [value, setValue] = useState({})
    const[Book,setBook]=useState({})
    const[open,setOpen]=useState(false)
    const data = useSelector(state => state.PostReducer.trips)
    // /console.log("dat",data && data)
    let { id } = useParams()
    useEffect(() => {
        let value = data ? data.find((item) => item.id === id) : ""
        setValue(value)
    }, [id])
    console.log("value", value)
    const classes = useStyles()
    const initialValues = {
        passengerName: "",
        passengerAge:""
    }
    const [state, setState] = useState(initialValues)
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })

    }
    const handleSubmit = (e) => {
        let temp = {
            from: value.from,
            to: value.to,
            time: value.time,
            arrival: value.arrival,
            passengerName: state.passengerName,
            passengerAge: state.passengerAge,
            trainName:value.trainName
        }
        setBook(temp)
        setOpen(true)
    }
    return (
        <>
            <Box className={classes.root}>
                <Box sx={{ p: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box sx={{ mt: 2 }}>
                                <Box className={classes.text}>
                                    <Typography variant="h5">Book Train for Your Journey</Typography>
                                </Box>
                                <Box className={classes.bookBox}>
                                    <FormControl>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography>Train Number</Typography>
                                                        <InputBox value={value.trainNumber} fullWidth disabled />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid item xs={12}>
                                                            <Typography>From</Typography>
                                                            <InputBox value={value.from} fullWidth disabled />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Typography>To</Typography>
                                                            <InputBox value={value.to} fullWidth disabled />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography>Passenger Name</Typography>
                                                            <InputBox value={state.passengerName} name="passengerName" fullWidth onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography>Passenger Age</Typography>
                                                            <InputBox value={state.passengerAge} name="passengerAge" fullWidth onChange={handleChange} />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Box className={classes.bookBox}>
                                                    <Button onClick={handleSubmit}>BookTrain</Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.text}>
                                <Typography variant="h5">Your Booked processed Train</Typography>
                            </Box>
                            <Box className={classes.bookBox}>
                            {
                                open && (  <ProcessedCard items={Book} />)
                            }
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default BookTrain