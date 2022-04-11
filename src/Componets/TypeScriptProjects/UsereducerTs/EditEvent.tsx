import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, InputBase, Button, FormControl } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import { styled } from '@mui/material/styles'
import { useParams ,useNavigate} from 'react-router-dom'
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
const useStyles = makeStyles({
    root: {
        height: "800px",
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
interface EditType {
    username: string,
    eventName: string,
    members: string,
    time: string
}
const EditEvent:React.FC= () => {
    const classes = useStyles()
    let { id } = useParams()
    // let initialState = {
    //     username: "",
    //     eventName: "",
    //     members: "",
    //     time: ""
    // }
    const [fetchData,setFetch]=useState<EditType>({username:"",eventName: "",
    members: "",
    time: ""})
    const [state, setState] = useState<EditType>({username:fetchData?.username, eventName: fetchData?.eventName,
    members: fetchData?.members,
    time: fetchData?.time})
    let navigate=useNavigate()
    useEffect(() => {
        (
            async () => {
                await axios.get("http://localhost:3004/Events")
                    .then((res: any) => {
                        console.log(res.data)
                        let data = res.data.find((item:any) =>item.id===id)
                        console.log(data)
                        setFetch(data)
                    })
                    .catch((err: string) => {
                        console.log(err)
                    })
            }
        )();
    }, [])

    useEffect(()=>{
        if(fetchData){
            setState(fetchData)
        }
    },[fetchData])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        console.log("submitted=>", state)
        axios.put(`http://localhost:3004/Events/${id}`,state)
        .then((res:any)=>{
            console.log(res.data)
            navigate(`/typeEvent`)
        })
        .catch((err:string)=>{
            console.log(err)
        })
    } 
    return (
        <>
            <Box>
                <Typography>Edit Event Partcipants</Typography>
                <Box>
                    <Grid container>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={6} sx={{ mt: 8 }}>
                            <FormControl>
                                <Box sx={{ flexGrow: 1, alignItems: "center" }}>
                                    <Box sx={{ p: 2 }}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <Typography>eventName</Typography>
                                                <InputBox fullWidth name="eventName" onChange={handleChange} value={state.eventName} />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <Typography>username</Typography>
                                                <InputBox fullWidth name="username" onChange={handleChange} value={state.username} />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ p: 2 }}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <Typography>time</Typography>
                                                <InputBox fullWidth name="time" onChange={handleChange} value={state.time} />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <Typography>InviteMembers</Typography>
                                                <InputBox fullWidth name="members" onChange={handleChange} value={state.members} />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <Box className={classes.alignBox}>
                                    <Box>
                                        <Button onClick={handleSubmit} className={classes.btn}>Update Event</Button>
                                    </Box>
                                </Box>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default EditEvent