import '../../../../Home.scss';
import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, CssBaseline } from '@mui/material';
import DrawerComponent from './DrawerComponent';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getBike } from '../ReduxStore/action';
import TableComponent from './TableComponent';
const useStyles = makeStyles({
  root: {
    minHeight: '855px',
    background: '#e6e6ff'
  }
});
const BikeTableTs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const BikeData= useSelector((state:RootStateOrAny) => state.ReducerComponent);
  console.log(BikeData, 'TableLogin');
  useEffect(() => {
    dispatch(getBike());
  }, [dispatch]);
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
              <TableComponent BikeData={BikeData} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BikeTableTs;
