import React, { useEffect, useState } from "react";
import { Box, TextField, Grid, InputLabel, Button, InputBase, InputAdornment } from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import { Typography } from "antd";
import { Link } from 'react-router-dom'
import ErrorComponent from "./ErrorComponent";
const DesignTextField = styled(InputBase)({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        background: "#242e8f",
        border: 'none',
        fontSize: 16,
        width: '',
        padding: '10px 12px',
        mb: 2,
        color: "#fff"
    },
    "& .css-luel6v-MuiInputBase-root": {
        background: "red!important"
    }
})
const DesignInputLabel = styled(InputLabel)({
    "&.MuiInputLabel-root": {
        color: "#cecece !important",
        marginTop: "10px",
    }
})

const useStyles = makeStyles({
    btn: {
        width: "100%",
        backgroundColor: "#f77!important",
        color: "#fff!important",
        height: "50px!important",
        borderWidth: "0!important",
        fontSize: "22px!important",
        borderRadius: "60px !important",
        marginTop: "20px !important"
    },
    text: {
        color: "#fff",
        marginTop: "20px",
    }
})

const initialState = {
    fname: "",
    lname: '',
    email: "",
    password: ""
    
}
let arr=[];
const Signup = () => {
    const classes = useStyles()
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [newArray,setArray]=useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }
    const handleValidation = () => {
        let error = {}
        const { fname, lname, email, password } = state
        if (fname === "") {
            error.name = "please input your first name"
        }
        if (lname === "") {
            error.lname = "please input your last name"
        }
        if (email === "") {
            error.email = "please input your email"
        }
        if (password === "") {
            error.password= "please input your password"
        }
        return error
    }
    const setLocalStorage=()=>{
        localStorage.setItem("NEWDATA",JSON.stringify(arr))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = handleValidation()
        console.log(Object.keys(errors).length)
        if (Object.keys(errors).length === 0) {
            console.log("ok")
            arr.push(state)
            setLocalStorage()
        }
        else {
            console.log(errors)
            setErrors(errors)
        }
    }
    const { fname, lname, password, email } = state
    return (
        <Box>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={12} md={12} lg={6} xl={6}>
                            <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                                Firstname
                            </DesignInputLabel>
                            <DesignTextField
                                name="fname" value={fname} onChange={handleChange}
                                fullWidth />
                                <ErrorComponent errorText={errors.name}/>
                        </Grid>
                        <Grid xs={6} sm={12} md={12} lg={6} xl={6}>
                            <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                                lastname
                            </DesignInputLabel>
                            <DesignTextField name="lname" value={lname} onChange={handleChange} fullWidth />
                            <ErrorComponent errorText={errors.lname}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Grid item xs={6}>
                        <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                            Email
                        </DesignInputLabel>
                        <DesignTextField name="email" value={email} onChange={handleChange} fullWidth />
                        <ErrorComponent errorText={errors.email}/>
                    </Grid>
                    <Grid item xs={6}>
                        <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                            Password
                        </DesignInputLabel>
                        <DesignTextField name="password" value={password} onChange={handleChange} fullWidth />
                        <ErrorComponent errorText={errors.password}/>
                    </Grid>
                </Grid>
                <Button className={classes.btn} onClick={handleSubmit}>Sign Up</Button>
                <Typography className={classes.text}>already have an account <Link to="/login">Login</Link></Typography>
            </Grid>
        </Box>
    )
}

export default Signup
