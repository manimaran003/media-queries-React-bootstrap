import React, { useState } from 'react';
import { Box, Grid, FormControl, InputBase, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import DataModel from './DataModel';
import { v4 as uuidv4 } from 'uuid';
import { RootStateOrAny } from 'react-redux';

const InputBox = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fcfcfb',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px'
  }
}));
const useStyles = makeStyles({
  root: {
    height: '800px'
    //  background: "orange"
  },
  alignBox: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  btn: {
    background: 'lightGreen',
    padding: '10px',
    marginTop: '20px',
    borderRadius: '50px',
    border: '2px solid lightGreen'
  }
});
const BookEvent: React.FC<{ add: (state: RootStateOrAny) => void }> = (props) => {
  const classes = useStyles();
  const initialState = {
    id: uuidv4(),
    username: '',
    eventName: '',
    members: '',
    time: ''
  };
  const [state, setState] = useState<DataModel>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('submitted=>', state);
    props.add(state);
  };
  return (
    <>
      <Box>
        <FormControl>
          <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
            <Box sx={{ p: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography>eventName</Typography>
                  <InputBox
                    fullWidth
                    name="eventName"
                    onChange={handleChange}
                    value={state.eventName}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography>username</Typography>
                  <InputBox
                    fullWidth
                    name="username"
                    onChange={handleChange}
                    value={state.username}
                  />
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
                  <InputBox
                    fullWidth
                    name="members"
                    onChange={handleChange}
                    value={state.members}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className={classes.alignBox}>
            <Box>
              <Button onClick={handleSubmit} className={classes.btn}>
                BookEvent
              </Button>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};
export default BookEvent;
