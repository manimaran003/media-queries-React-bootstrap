import React from 'react'
import { Box, Grid,FormControl,InputBase,Typography,Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
// import TableComponent from './TableComponent'

const InputBox = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fcfcfb',
        border: '1px solid #ced4da',
        fontSize: 16,
        width:"100%",
        padding: '10px 12px',
    }
}))
const useStyles = makeStyles({
    root: {
        height:"800px",
      //  background: "orange"
    },
    alignBox: {
        display: "flex",
        justifyContent: "center",
        flexGrow: 1
    },
    btn: {
        background: "lightGreen",
        padding: "10px",
        marginTop: "20px",
        borderRadius: "50px",
        border: "2px solid lightGreen"
    },
})
const EventPage = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Box sx={{pt:10}}>
                <Grid container>
                    <Grid item xs={6}>
                    <FormControl>
                        <Box sx={{flexGrow:1,alignItems:"center"}}>
                        <Box sx={{p:2}}>
                        <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Typography>eventName</Typography>
                                    <InputBox fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Typography>username</Typography>
                                    <InputBox fullWidth />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{p:2}}>
                        <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Typography>time</Typography>
                                    <InputBox fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Typography>InviteMembers</Typography>
                                    <InputBox fullWidth />
                                </Grid>
                            </Grid>
                        </Box>
                        </Box>
                            <Box className={classes.alignBox}>
                                <Box>
                                    <Button className={classes.btn}>BookEvent</Button>
                                </Box>
                            </Box>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <TableComponent/> */}
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </>
    )
}

export default EventPage