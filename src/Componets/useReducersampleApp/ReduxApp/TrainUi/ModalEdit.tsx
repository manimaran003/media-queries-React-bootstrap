import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, Modal } from '@mui/material';
import { editUser } from '../../ReduxFIles/Actions/ActionTrain';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2
};

const ModalEdit: React.FC<{ item: RootStateOrAny; open: boolean; close: () => void }> = (props) => {
  const {item,open,close}=props
  console.log('modal', item);
  const { id, trainName, from, to, arrival, time, passengerName, passengerAge } = item;
  const dispatch= useDispatch();
  const success = useSelector((states:RootStateOrAny) => states.NextReducer.success);
  // type IUser = {
  //   passengerAge: string;
  //   passengerName: string;
  // };
  const initialValues = {
    passengerName: passengerName,
    passengerAge: passengerAge
  };
  const [state, setState] = useState(initialValues);
  const handleChange = (e: RootStateOrAny) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    if (props.item) {
      setState(props.item);
    }
  }, [props.item]);
  const handleSubmit = (e: RootStateOrAny) => {
    e.preventDefault();
    const temp = {
      from: from,
      to: to,
      time: time,
      arrival: arrival,
      passengerName: state.passengerName,
      passengerAge: state.passengerAge,
      trainName: trainName
    };
    dispatch(editUser(id, temp));
    toast(success);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'center', color: 'green', mb: 2 }}>
            <Typography>Update Train</Typography>
            <ToastContainer />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>trainName</Typography>
            <TextField name="trainNumber" value={trainName} disabled />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>from</Typography>
            <TextField name="from" value={from} disabled />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>to</Typography>
            <TextField name="to" value={to} disabled />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>arrival</Typography>
            <TextField name="arrival" value={arrival} disabled />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>time</Typography>
            <TextField name="time" value={time} disabled />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>PassengerName</Typography>
            <TextField name="passengerName" value={state.passengerName} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>PassengerAge</Typography>
            <TextField name="passengerAge" value={state.passengerAge} onChange={handleChange} />
          </Box>

          <Box sx={{ width: '100%', textAlign: 'center', mt: 3 }}>
            <Button variant="contained" onClick={handleSubmit}>
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

ModalEdit.propTypes={
  close:PropTypes.func.isRequired,
  open:PropTypes.bool.isRequired,
  item:PropTypes.object
}

export default ModalEdit;
