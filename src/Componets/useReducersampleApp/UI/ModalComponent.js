import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, Modal } from '@mui/material';
import PropTypes from 'prop-types'
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
const ModalComponent = (props) => {
  const {pass,NewData,open,close}=props
  const {id,ProductName,ProductPrice}=pass
  const initialValues = {
    id:id,
    ProductName: ProductName,
    ProductPrice:ProductPrice
  };
  const [state, setState] = useState(initialValues);
  useEffect(() => {
    if (pass) {
      setState(pass);
    }
  }, [pass]);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    NewData(state);
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
            <Typography>Update Employee</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>ProductName</Typography>
            <TextField
              name="ProductName"
              value={state.ProductName}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              alignItems: 'center'
            }}
          >
            <Typography>ProductPrice</Typography>
            <TextField
              name="ProductPrice"
              value={state.ProductPrice}
              onChange={(e) => handleChange(e)}
            />
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

ModalComponent.propTypes={
  pass:PropTypes.object.isRequired,
  NewData:PropTypes.func.isRequired,
  open:PropTypes.bool.isRequired,
  close:PropTypes.func.isRequired,
}

export default ModalComponent;
