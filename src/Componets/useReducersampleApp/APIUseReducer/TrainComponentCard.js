import React,{useContext, useState} from 'react'
import AuthContext from './auth-context'
import ReactDOM from 'react-dom'
import { Card, CardActions, CardContent, CardMedia, Typography ,Button} from '@mui/material'
import EditModal from './EditModal'
const TrainComponentCard = (props) => {
    const [open,setOpen]=useState(false)
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    const ctx=useContext(AuthContext)
    const handleDelete=(id)=>{
        console.log("deleted",id)
        ctx.delete(id)
    }
    const handleEdit=()=>{
        handleOpen()
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        from :{props.trainPass.from}  to:{props.trainPass.to}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       time: {props.trainPass.time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        arrival: {props.trainPass.arrival}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>handleEdit()}>edit</Button>
                    {ReactDOM.createPortal(<EditModal open={open} close={handleClose} pass={props.trainPass}/>,document.getElementById("overlay"))}
                    <Button size="small" onClick={()=>handleDelete(props.trainPass.id)}>delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default TrainComponentCard