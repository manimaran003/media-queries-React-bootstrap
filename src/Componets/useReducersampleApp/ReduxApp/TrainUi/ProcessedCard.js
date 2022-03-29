import * as React from 'react';
import { Box,Card, CardActions,CardContent,CardMedia,Button,Typography   } from '@mui/material';
import {addUser} from '../../ReduxFIles/Actions/ActionTrain'
import { useDispatch,useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
export default function ProcessedCard(props) {
    const {passengerName,passengerAge,from,to,time,arrival,trainName}=props.items
    let dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        let temp = {
            id:uuidv4(),
            from: from,
            to: to,
            time: time,
            arrival: arrival,
            passengerName:passengerName,
            passengerAge: passengerAge,
            trainName:trainName
        }
        dispatch(addUser(temp))
    }
  return (
    <Card sx={{ maxWidth: 500,minHeight:500 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://www.livechennai.com/businesslistings/News_photo/Tejas-Express8219.jpg"
        alt="green iguana"
      />
      <CardContent sx={{mt:5}}>
      <Typography gutterBottom variant="h5" component="div">
       PassengerName:  {passengerName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        TrainName: {trainName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {from}to {to} dispatched train
        </Typography>
        <Box>
            time: {time}
        </Box>
        <Box>
            arrival:{arrival}
        </Box>
        <Typography>please confirm your train with confirm button</Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={(handleSubmit)}>Confirm Train</Button>
        <Button size="small">DeleteTrain</Button>
        <Button size="small">EditTrain</Button>
      </CardActions>
    </Card>
  );
}