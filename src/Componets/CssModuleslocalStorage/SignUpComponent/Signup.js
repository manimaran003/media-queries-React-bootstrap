import React,{useState} from "react";
import { Box, Grid, InputLabel, Button, InputBase} from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import { Typography } from "antd";
import { Link,useNavigate } from 'react-router-dom'
import ErrorComponent from "./ErrorComponent";
import 'react-toastify/dist/ReactToastify.css';
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
    },
    successMsg:{
        color:"lightgreen",
        textAlign:"center",
        fontSize:"20px"

    }
})

const initialState = {
    fname: "",
    lname: '',
    email: "",
    password: ""
    
}
const Signup = () => {
    let navigate=useNavigate()
    const classes = useStyles()
    const [state, setState] = useState(initialState)
    const [Errors, setErrors] = useState({})
    const[showReg,setReg]=useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }
    const handleValidation = () => {
        let error = {}
        if (state.fname === "") {
            error.name = "please input your first name"
        }
        if (state.lname === "") {
            error.lname = "please input your last name"
        }
        if (state.email === "") {
            error.email = "please input your email"
        }
        if (state.password === "") {
            error.password= "please input your password"
        }
        return error
    }
    const setLocalStorage=()=>{
        localStorage.setItem("NEWDATA",JSON.stringify([state]))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = handleValidation()
        console.log(Object.keys(errors).length)
        if (Object.keys(errors).length === 0) {

            let localData=localStorage.getItem("NEWDATA")
            if(localData){
                let local=JSON.parse(localData)
                local.push(state)
                localStorage.setItem("NEWDATA",JSON.stringify(local))
            }
            else{
                setLocalStorage()
            }
            setReg(true)
            setTimeout(()=>{
                setReg(false)
                navigate("/login")
            },2000)
        }
        else {
            console.log(errors)
            setErrors(errors)
        }
    }
    const { fname, lname, password, email } = state
    return (

        <Box>
           {showReg && <p className={classes.successMsg}>Form Registered Successfully</p>}
            <Grid container justifyContent={'center'}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid  item xs={5} sm={12} md={12} lg={5} xl={5.5}>
                            <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                                Firstname
                            </DesignInputLabel>
                            <DesignTextField
                                name="fname" value={fname} onChange={handleChange}
                                fullWidth />
                                <ErrorComponent errorText={Errors.name}/>
                        </Grid>
                        <Grid xs={2} lg={1}>
                        </Grid>
                        <Grid xs={5} sm={12} md={12} lg={5} xl={5.5}>
                            <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                                lastname
                            </DesignInputLabel>
                            <DesignTextField name="lname" value={lname} onChange={handleChange} fullWidth />
                            <ErrorComponent errorText={Errors.lname}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Grid item xs={6}>
                        <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                            Email
                        </DesignInputLabel>
                        <DesignTextField name="email" value={email} onChange={handleChange} fullWidth />
                        <ErrorComponent errorText={Errors.email}/>
                    </Grid>
                    <Grid item xs={6}>
                        <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                            Password
                        </DesignInputLabel>
                        <DesignTextField name="password" value={password} onChange={handleChange} fullWidth />
                        <ErrorComponent errorText={Errors.password}/>
                    </Grid>
                </Grid>
                <Button className={classes.btn} onClick={handleSubmit}>Sign Up</Button>
                <Typography className={classes.text}>already have an account <Link to="/login">Login</Link></Typography>
            </Grid>
        </Box>
    )
}

export default Signup
