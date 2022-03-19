import React from "react";

import {Menu,MenuItem,Typography} from '@mui/material'
const pages = ['Products', 'Pricing', 'Blog'];
const MenuComponent=(props)=>{
    return(
        <>
        <Menu
              id="menu-appbar"
              anchorEl={true}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(props.open)}
              onClose={props.close}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={props.close}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </>
    )
}

export default MenuComponent