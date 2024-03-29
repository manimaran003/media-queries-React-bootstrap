import React, { useContext, useState } from 'react';
import AuthContext from './auth-context';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import EditModal from './EditModal';
const TrainComponentCard = (props) => {
  console.log("hii card=>>>>>>>>>>>>>",props)
  const {trainPass}=props
  const{id,time,from,arrival,to}=trainPass
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const ctx = useContext(AuthContext);
  const handleDelete = (id) => {
    console.log('deleted', id);
    ctx.delete(id);
  };
  const handleEdit = () => {
    handleOpen();
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            from :{from} to:{to}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            time: {time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            arrival: {arrival}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleEdit()}>
            edit
          </Button>
          {ReactDOM.createPortal(
            <EditModal open={open} close={handleClose} pass={trainPass} />,
            document.getElementById('overlay')
          )}
          <Button size="small" onClick={() => handleDelete(id)}>
            delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
TrainComponentCard.propTypes = {
 trainPass: PropTypes.object
};

export default TrainComponentCard;
