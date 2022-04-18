import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
    },
    img: {
        width: "50px",
        height: "50px"
    },
    text: {
        textDecoration: "underline",
        cursor: "pointer"
    }
})
const ApiHeader = () => {
    const classes = useStyles()
    let navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = () => {
        navigate("/Homepage")
        handleClose()
    }
    return (
        <>
            <Box className={classes.root}>
                <Box sx={{ flexGrow: 0.1, }}>
                    <img alt="txt" className={classes.img} src="https://uxdt.nic.in/wp-content/uploads/2020/06/IRCTC-Preview.png?x38465" />
                </Box>
                <Box sx={{ flexGrow: 5, justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography>Railway Booking System </Typography>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {/* <Box>
                            <Typography className={classes.text} onClick={() => navigate("/Homepage")}>HomePage</Typography>
                        </Box> */}
                        <IconButton >
                            <Avatar
                                id="basic-avatar"
                                aria-controls={open ? 'basic-avatar' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                alt="Remy Sharp"
                                src={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            />
                        </IconButton>
                        <Menu
                            id="basic-avatar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleChange}>HomePage</MenuItem>
                        </Menu>
                    </Box>

                </Box>
                <Box sx={{ flexGrow: 0.1, display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" } }}>
                    <IconButton>
                        <MenuIcon id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleChange}>HomePage</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}

export default ApiHeader