import React from 'react';
import { Box } from '@mui/material';
import { Typography } from 'antd';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  img: {
    width: '40px',
    height: '40px'
  },
  text: {
    color: 'lightgreen',
    fontSize: '25px'
  }
});
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
          <img
            alt="pic"
            className={classes.img}
            src="https://previews.123rf.com/images/ikalvi/ikalvi1712/ikalvi171200242/92412982-souriant-cr%C3%A9ation-de-logo-vectoriel-panier-d-achat-shopping-logo-vectoriel-ou-app-.jpg"
          />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around' }}>
          <Box sx={{ flexGrow: 2, justifyContent: 'center' }}>
            <Box>
              <Typography className={classes.text}>Mini Shopping Mart</Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
