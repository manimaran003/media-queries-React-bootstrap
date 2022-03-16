import React from "react";
import { Box, TextField, Grid, InputLabel, Button, InputBase, InputAdornment } from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import { Typography } from "antd";
import {Link} from 'react-router-dom'
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
const Signup = () => {
    const classes = useStyles()
    return (
        <Box>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                                Firstname
                            </DesignInputLabel>
                            <DesignTextField
                                fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                                lastname
                            </DesignInputLabel>
                            <DesignTextField fullWidth />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Grid item xs={6}>
                        <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                            Email
                        </DesignInputLabel>
                        <DesignTextField fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <DesignInputLabel className={classes.root} shrink htmlFor="bootstrap-input">
                            Password
                        </DesignInputLabel>
                        <DesignTextField fullWidth />
                    </Grid>
                </Grid>
                <Button className={classes.btn}>Sign Up</Button>
                <Typography className={classes.text}>already have an account <Link to="/login">Login</Link></Typography>
            </Grid>
        </Box>
    )
}

export default Signup
