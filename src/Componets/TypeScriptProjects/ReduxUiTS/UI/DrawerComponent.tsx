import '../../../../Home.scss';
import React from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Drawer, Toolbar, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
const DrawerComponent = () => {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          zIndex: 0,
          ['@media (max-width:768px)']: {
            // eslint-disable-line no-useless-computed-key
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }
          }
        }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button onClick={() => navigate('/BikeRedux')}>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'user login'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={'User Details'} onClick={() => navigate('/BikeTable')} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
