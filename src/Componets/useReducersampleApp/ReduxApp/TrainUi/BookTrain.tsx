import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography, Button, FormControl, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import ProcessedCard from "./ProcessedCard";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../../ReduxFIles/Actions/ActionTrain";
import { useParams } from "react-router-dom";
import ConvertTsModel from "../../ReduxFIles/ConvertTsModel";
const InputBox = styled(InputBase)(() => ({
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
const BookTrain:React.FC= () => {
    const [values, setValue] = useState<ConvertTsModel>(
        {
            id:"",
            from:"",
            time:"",
            arrival:"",
            passengerName:"",
            trainName:"",
            passengerAge:"",
            to:"",
            trainNumber:""
        }
    )
    const [btn, setBtn] = useState(false)
    const [open, setOpen] = useState(false)
    let dispatch:any = useDispatch()
    const data:any = useSelector((states:any) => states.PostReducer.trips)
    let { id } = useParams()
    useEffect(() => {
        let valued = data ? data.find((item:any) => item.id === id) : ""
        setValue(valued)
    }, [data, id])
    type IUser={
        passengerAge:string,
        passengerName:string
    }
    const classes = useStyles()
    let initialValues = {
        passengerName: "",
        passengerAge: ""
    }
    const [state, setState] = useState<IUser>(initialValues)
    const handleChange = (e:any) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        let temp:any = {
            id: uuidv4(),
            from: values.from,
            to: values.to,
            time: values.time,
            arrival: values.arrival,
            passengerName: state.passengerName,
            passengerAge: state.passengerAge,
            trainName: values.trainName,
            trainNumber:values.trainNumber
        }
        dispatch(addUser(temp))
        setOpen(true)
        setBtn(true)
        handleReset()
    }
    const handleReset = () => {
        initialValues = {
            passengerName: "",
            passengerAge: ""
        }
        setState(initialValues)
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
                                                        <InputBox value={values.trainNumber} fullWidth disabled />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid item xs={12}>
                                                            <Typography>From</Typography>
                                                            <InputBox value={values.from} fullWidth disabled />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Typography>To</Typography>
                                                            <InputBox value={values.to} fullWidth disabled />
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
                                                    <Button disabled={btn} onClick={handleSubmit}>BookTrain</Button>
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
                                    open && (<ProcessedCard />)
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