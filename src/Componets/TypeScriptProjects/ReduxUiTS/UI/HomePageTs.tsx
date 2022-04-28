import '../../../../Home.scss';
import React from 'react';
import { makeStyles } from '@mui/styles';
import UserLogin from './UserLogin';
import { Box, Grid, CssBaseline } from '@mui/material';
import DrawerComponent from './DrawerComponent';

const useStyles = makeStyles({
  root: {
    minHeight: '855px',
    background: '#e6e6ff'
  }
});
const HomePageTs = () => {
  const classes = useStyles();
  return (
    <Box sx={{}}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={0} sm={0} md={1.5} lg={1.5} xl={1.5}>
          <DrawerComponent />
        </Grid>
        <Grid item xs={12} sm={12} md={10.5} lg={10.5} xl={10.5}>
          <Box component="main" sx={{ mt: 7 }}>
            <Box className={classes.root}>
              <UserLogin />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePageTs;
