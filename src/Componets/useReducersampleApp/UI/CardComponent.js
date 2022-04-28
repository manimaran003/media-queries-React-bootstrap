import { Card, CardMedia } from '@mui/material';
import React, { useContext } from 'react';
import AuthContext from '../MainPage/auth-context';
import PropTypes from 'prop-types'
const CardComponent = (props) => {
  const {data}=props
  const{id,url}=data
  let authctx = useContext(AuthContext);
  const handleSubmit = (e, id) => {
    e.preventDefault();

    authctx.add(id);
  };
  return (
    <Card sx={{ minWidth: 120, height: 120 }} onClick={(e) => handleSubmit(e,id)}>
      <CardMedia component="img" height="140" image={url} alt="green iguana" />
    </Card>
  );
};
CardComponent.propTypes={
  data:PropTypes.object
}
export default CardComponent;
