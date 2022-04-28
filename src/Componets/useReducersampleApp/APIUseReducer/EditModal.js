import React, { useState, useContext } from 'react';
import { Box, Button, Typography, TextField, Modal } from '@mui/material';
import AuthContext from './auth-context';
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
const EditModal = (props) => {
  console.log("haii=>>>>>",props)
  const {pass,open,close}=props
  const{from,to,arrival,time,id}=pass
  const ctx = useContext(AuthContext);
  const initialValues = {
    from: from,
    to: to,
    arrival: arrival,
    time:time
  };
  const [state, setState] = useState(initialValues);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from: state.from,
      to: state.to,
      arrival: state.arrival,
      time: state.time
    };
    ctx.edit(id, data);
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
            <TextField name="from" value={state.from} onChange={(e) => handleChange(e)} />
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
            <TextField name="to" value={state.to} onChange={(e) => handleChange(e)} />
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
            <TextField name="arrival" value={state.arrival} onChange={(e) => handleChange(e)} />
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
            <TextField name="time" value={state.time} onChange={(e) => handleChange(e)} />
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

EditModal.propTypes={
  open:PropTypes.bool.isRequired,
  close:PropTypes.func.isRequired,
  pass:PropTypes.object
}

export default EditModal;
