import React from 'react'
import { Box, Typography, Paper, Grid, InputBase, Button} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
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
        width: "150%",
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
        top: "-40px",
        bottom: "50px",
        left: "60px",
        right: "40px",
        fontSize: "40px",
        color: "#c0e6ee"
    }
})
const UserLogin: React.FC = () => {
    const classes = useStyles()
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
                                        <img alt="img" className={classes.imageShow} src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                                        <label htmlFor="icon-button-file">
                                            <Input accept="image/*" id="icon-button-file" type="file" />

                                            <PhotoCamera className={classes.camera} />
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
                                <Box className={classes.alignBox}>
                                    <Box>
                                        <Button className={classes.btn}>BookEvent</Button>
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