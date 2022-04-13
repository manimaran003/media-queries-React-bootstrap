import React, { useState } from 'react'
import { Box, Typography, Paper, Grid, InputBase, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';
const InputBox = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fcfcfb',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: "100%",
        padding: '10px 12px',
    }
}))
const Input = styled('input')({
    display: 'none',
});
const useStyles = makeStyles({
    root: {
        height: "800px",
    },
    alignBox: {
        display: "flex",
        justifyContent: "center",
        flexGrow: 2
    },
    btn: {
        width: "100%",
        background: "lightGreen",
        padding: "10px",
        marginTop: "20px",
        borderRadius: "50px",
        border: "2px solid lightGreen"
    },
    imageShow: {
        width: "150px",
        height: "150px",
        borderRadius: "50px",
        background: "#46b5cc"
    },
    spaceBox: {
        marginTop: "20px",
        paddingRight: "10px"
    },
    camera: {
        position: "relative",
        top: "110px",
        bottom: "50px",
        left: "20px",
        right: "30px",
        fontSize: "40px",
        color: "#c0e6ee"
    },
    AfterPic:{
        top: "-40px",
        left: "58px",
        color: "#c0e6ee",
        right: "30px",
        bottom: "50px",
        position: "relative",
        fontSize: "40px"
    }
})
const UserLogin: React.FC = () => {
    const classes = useStyles()
    let navigate:any=useNavigate()
    const [img, setImg] = useState<string>("")
    const handleSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
        navigate('/BikeTable')
    }
    const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files[0]) {
            let reader: any;
            reader = new FileReader()
            reader.onload = (): void => {
                console.log("inside onload", reader)
                setImg(reader.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    return (
        <>
            <Box sx={{ mt: 7 }}>
                <Grid container>
                    <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Paper elevation={3} sx={{ height: "800px", mt: 3 }}>
                            <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", p: 4 }}>
                                <Typography variant="h4">Bike Form</Typography>
                            </Box>
                            <Box>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box className={classes.imageShow}>
                                        <img alt="img" className={classes.imageShow} src={img} />
                                        <label htmlFor="icon-button-file">
                                            <Input onChange={(e) => handleInputFileChange(e)} accept="image/*" id="icon-button-file" type="file" />

                                            <PhotoCamera className={img?`${classes.AfterPic}`:`${classes.camera}`} />
                                        </label>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ p: 3 }}>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Typography>Owner Name</Typography>
                                        <InputBox fullWidth className={classes.spaceBox} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Typography>Bike No</Typography>
                                        <InputBox fullWidth className={classes.spaceBox} />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Typography>Bike Name</Typography>
                                        <InputBox fullWidth className={classes.spaceBox} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Typography>Mobile No</Typography>
                                        <InputBox fullWidth className={classes.spaceBox} />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Typography>Missing Date</Typography>
                                        <InputBox fullWidth className={classes.spaceBox} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Typography>Missing Place</Typography>
                                        <InputBox fullWidth className={classes.spaceBox} />
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Box>
                                        <Button className={classes.btn} onClick={handleSubmit}>Submit</Button>
                                    </Box>
                                </Box>
                            </Box>


                        </Paper>

                    </Grid>
                    <Grid xs={0} sm={0} md={3} lg={3} xl={3}>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default UserLogin