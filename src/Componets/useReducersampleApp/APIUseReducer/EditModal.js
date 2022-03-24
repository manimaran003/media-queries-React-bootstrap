import React, { useState, useContext } from "react";
import { Box, Button, Typography, TextField, Modal } from '@mui/material'
import AuthContext from './auth-context'
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
const EditModal = (props) => {
    const ctx = useContext(AuthContext)
    const initialValues = {
        from: props.pass.from,
        to: props.pass.to,
        arrival: props.pass.arrival,
        time: props.pass.time
    }
    const [state, setState] = useState(initialValues)
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            from: state.from,
            to: state.to,
            arrival: state.arrival,
            time: state.time,
        }
        ctx.edit(props.pass.id, data)
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
                            value={state.from}
                            onChange={(e) => handleChange(e)}
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
                            value={state.to}
                            onChange={(e) => handleChange(e)}
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
                            value={state.arrival}
                            onChange={(e) => handleChange(e)}
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
                            value={state.time}
                            onChange={(e) => handleChange(e)}
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

export default EditModal