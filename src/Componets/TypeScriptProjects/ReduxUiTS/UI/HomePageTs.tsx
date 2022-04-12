import '../../../../Home.scss'
import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import UserLogin from './UserLogin'
import {Box,Grid,Drawer,CssBaseline,Toolbar,List,ListItem,ListItemText,ListItemIcon,Typography} from '@mui/material'
const drawerWidth = 240;
const useStyles=makeStyles({
    root:{
        minHeight:"855px",
        background:"#e6e6ff",
    },
    // RemoveBox:{
    //     ['@media (max-width:768px)' ]: { // eslint-disable-line no-useless-computed-key
    //         width:"0px"
    //       },
    //     ['@media (min-width:992px)' ]: { // eslint-disable-line no-useless-computed-key
    //         width:"1800px",
    //         display:"none"
    //       },
    //       ['@media (min-width:1200px)' ]: { // eslint-disable-line no-useless-computed-key
    //         width:"900px",
    //         display:"none"
    //       },
    //       ['@media (min-width:1440px)' ]: { // eslint-disable-line no-useless-computed-key
    //         width:"1200px",
    //         display:"none"
    //       },
    //       ['@media (min-width:1600px)' ]: { // eslint-disable-line no-useless-computed-key
    //         width:"900px",
    //         display:"none"
    //       }
    // }
})
const HomePageTs = () => {
    const classes=useStyles()
    return (
        <Box sx={{ }}>
            <CssBaseline />
             <Grid container>
                 <Grid item xs={0} sm={0} md={1.5} lg={1.5} xl={1.5}>
                 <Drawer
        variant="permanent"
        //className={classes.root}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',zIndex:0 , ['@media (max-width:768px)' ]: { // eslint-disable-line no-useless-computed-key
                display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}
              }},
          }}
       
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
                        <ListItem button >
                            <ListItemIcon>
                               <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={"user login"} />
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"admin login"} />
                        </ListItem>
                    </List>
        </Box>
      </Drawer>
                 </Grid>
                 <Grid item xs={12} sm={12} md={10.5} lg={10.5} xl={10.5} >
                 <Box  component="main"  sx={{mt:7}}>
                     <Box className={classes.root}>
                         <UserLogin/>
                     </Box>
                </Box> 
                 </Grid>
             </Grid>
        </Box>
    );
}

export default HomePageTs