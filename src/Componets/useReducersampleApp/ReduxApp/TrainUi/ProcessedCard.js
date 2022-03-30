import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { addUser } from '../../ReduxFIles/Actions/ActionTrain'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../ReduxFIles/Actions/ActionTrain';
import ModalEdit from './ModalEdit';
import {deleteUser} from "../../ReduxFIles/Actions/ActionTrain"
import {useNavigate} from 'react-router-dom'
export default function ProcessedCard() {
  const [train, setTrain] = useState({})
  let data = useSelector(state => state.PostReducer.userTrain)
  const [open, setOpen] = useState(false)
  let dispatch = useDispatch()
  let navigate=useNavigate()
  useEffect(() => {
    dispatch(getUser())
  }, [])
  useEffect(() => {
    console.log("trainsNew",data)
    setTrain(data ? data[0] : {})
  }, [data])
  const handleEdit = (e) => {
    e.preventDefault()
    setOpen(true)
    //props.pass(train,"edit")
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDelete=(e)=>{
    e.preventDefault()
    dispatch(deleteUser(train.id))
    navigate("/reduxapi")
  }
  console.log("newedit", train)
  return (
    <Card sx={{ maxWidth: 500, minHeight: 500 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://www.livechennai.com/businesslistings/News_photo/Tejas-Express8219.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ mt: 5 }}>
        <Typography gutterBottom variant="h5" component="div">
          PassengerName: {train.passengerName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          TrainName: {train.trainName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {train.from} to {train.to} dispatched train
        </Typography>
        <Box>
          time: {train.time}
        </Box>
        <Box>
          arrival:{train.arrival}
        </Box>
        <Typography>please confirm your train with confirm button</Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleDelete}>DeleteTrain</Button>
        <Button size="small" onClick={handleEdit}>EditTrain</Button>
        <ModalEdit open={open} close={handleClose} item={train} />
      </CardActions>
    </Card>
  );
}