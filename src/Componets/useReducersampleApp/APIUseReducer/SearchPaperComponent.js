import React, { useState, useContext } from 'react'
import { Box, Grid, Paper, Typography, TextField, Card, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AuthContext from './auth-context'
import { v4 as uuidv4 } from 'uuid';
const useStyles = makeStyles({
    text: {
        textAlign: "center",
        marginBottom: "40px",
        marginBottom: "20px !important"
    },
    btn: {
        width: "100%",
        background: "blue",
        marginTop: "20px !important"
    }

})
const SearchPaperComponent = () => {
    let authCtx = useContext(AuthContext)
    const initialValues = {
        from: "", to: ""
    }
    const AddInitial = {
        id: "", fromCity: "", toCity: "", arrival: "", time: ""
    }
    const classes = useStyles()
    const [state, setState] = useState(initialValues)
    const [addState, AddsetState] = useState(AddInitial)
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleChange1 = (e) => {
        AddsetState({ ...addState, [e.target.name]: e.target.value })
    }
    const clearField=()=>{
        AddsetState(AddInitial)
    }
    const handleSubmit = (e, data) => {
        e.preventDefault()
        if (data === "search") {
            console.log(state)
            authCtx.search(state)
        }
        if (data === "add") {
            const data = {
                id: uuidv4(),
                from: addState.fromCity,
                to: addState.toCity,
                arrival: addState.arrival,
                time: addState.time
            }
            authCtx.add(data)
            console.log(data)
            clearField()
        }
    }
    return (
        <>
            <Box sx={{ p: 4 }}>
                <Typography variant="h5" className={classes.text}>SearchTrains</Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField placeholder='From' name="from" value={state.from} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder='To' name="to" value={state.to} onChange={handleChange} />
                    </Grid>
                    <Button className={classes.btn} onClick={(e) => handleSubmit(e, "search")}>Search</Button>
                </Grid>
            </Box>

            <Box>
                <Typography variant="h5" className={classes.text}>AddNewTrain</Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField placeholder='From' name="fromCity" value={addState.fromCity} onChange={handleChange1} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder='To' name="toCity" value={addState.toCity} onChange={handleChange1} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField placeholder='time' name="time" value={addState.time} onChange={handleChange1} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder='arrival' name="arrival" value={addState.arrival} onChange={handleChange1} />
                    </Grid>
                    <Button className={classes.btn} onClick={(e) => handleSubmit(e, "add")}>Add</Button>
                </Grid>
            </Box>
        </>
    )
}
export default SearchPaperComponent

