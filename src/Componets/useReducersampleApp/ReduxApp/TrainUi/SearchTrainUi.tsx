import React from 'react';
import { Grid, Box, FormControl, InputBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Button } from 'antd';

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
  head: {
    color: 'green',
    marginBottom: '20px !important'
  },
  btn: {
    background: 'lightGreen',
    padding: '10px',
    marginTop: '20px',
    borderRadius: '50px',
    border: '2px solid lightGreen'
  },
  alignBox: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  backImg: {
    width: '100%',
    height: '100%'
  }
});

const SearchTrainUi = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box>
          <Box sx={{ mt: 18 }} className={classes.alignBox}>
            <Typography variant="h5" className={classes.head}>
              Search Train for Boarding Point
            </Typography>
          </Box>
          {/* <Box>
                        <img className={classes.backImg} src="https://images.news18.com/ibnlive/uploads/2021/09/train-4-16324768154x3.jpg" />

                    </Box> */}
          {/* <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}> */}
          <FormControl>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>From</Typography>
                <InputBox fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography>To</Typography>
                <InputBox fullWidth />
              </Grid>
            </Grid>
            <Box className={classes.alignBox}>
              <Box>
                <Button className={classes.btn}>SearchTrain</Button>
              </Box>
            </Box>
          </FormControl>
          {/* </Box> */}
        </Box>
      </Box>
    </>
  );
};
export default SearchTrainUi;
