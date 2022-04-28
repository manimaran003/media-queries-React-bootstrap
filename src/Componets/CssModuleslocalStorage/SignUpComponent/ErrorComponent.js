import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types'
const ErrorComponent = (props) => {
  const {errorText}=props
  return (
    <>
      <Typography sx={{ color: 'red' }}>{errorText}</Typography>
    </>
  );
};
ErrorComponent.propTypes={
  errorText:PropTypes.string
}

export default ErrorComponent;
