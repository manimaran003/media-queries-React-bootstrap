import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, TextField, Modal } from '@mui/material'
import { editUser } from "../../ReduxFIles/Actions/ActionTrain";
import { useSelector,useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
};

const ModalEdit = (props) => {
    console.log('modal',props.item)
    const {id,trainName,from,to,arrival,time,passengerName,passengerAge}=props.item
    let dispatch=useDispatch()
    let success=useSelector(state=>state.NextReducer.success)
    let initialValues = {
        passengerName:passengerName,
        passengerAge:passengerAge
    }
    const [state, setState] = useState(initialValues)
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    useEffect(()=>{
        if(props.item){
            setState(props.item)
        }
    },[props.item])
    const handleSubmit=(e)=>{
        e.preventDefault()
        let temp = {
            from: from,
            to: to,
            time: time,
            arrival: arrival,
            passengerName: state.passengerName,
            passengerAge: state.passengerAge,
            trainName:trainName
        }
        dispatch(editUser(id,temp))
        console.log("success",success && success)
        toast(success)
    }

    return (
        <>
            <Modal
                open={props.open}
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", justifyContent: "center", color: "green", mb: 2 }}>
                        <Typography>Update Train</Typography>
                        <ToastContainer/>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>trainName</Typography>
                        <TextField
                            name="trainNumber"
                            value={trainName}
                            disabled
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>from</Typography>
                        <TextField
                            name="from"
                            value={from}
                            disabled
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>to</Typography>
                        <TextField
                            name="to"
                            value={to}
                            disabled
                           
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>arrival</Typography>
                        <TextField
                            name="arrival"
                            value={arrival}
                            disabled
                         
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>time</Typography>
                        <TextField
                            name="time"
                            value={time}
                            disabled
                         
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>PassengerName</Typography>
                        <TextField
                            name="passengerName"
                            value={state.passengerName}
                            onChange={handleChange}
                         
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            alignItems: "center",
                        }}
                    >
                        <Typography>PassengerAge</Typography>
                        <TextField
                            name="passengerAge"
                            value={state.passengerAge}
                            onChange={handleChange}
                        />
                    </Box>

                    <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
                        <Button variant="contained" onClick={handleSubmit}>
                            Update
                        </Button>
                    </Box>
                </Box>
              
            </Modal>
        </>
    )
}

export default ModalEdit