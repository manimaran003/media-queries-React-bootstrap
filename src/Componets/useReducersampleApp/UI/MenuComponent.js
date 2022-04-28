import React from 'react';
import PropTypes from 'prop-types'
import { Menu, MenuItem, Typography } from '@mui/material';
const pages = ['Products', 'Pricing', 'Blog'];
const MenuComponent = (props) => {
  const {open,close}=props
  return (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(open)}
        onClose={close}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={close}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

MenuComponent.propTypes={
  open:PropTypes.bool.isRequired,
  close:PropTypes.func.isRequired
}

export default MenuComponent;
