import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    largeMenuIcon: {
      fontSize: '2.5rem', // Adjust the font size as needed
    },
  }));
  

export const Sidebar = () => {
const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
        <MenuIcon className={classes.largeMenuIcon} />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {/* Add your sidebar items here */}
          <ListItem button>
            <ListItemIcon>{/* Add an icon */}</ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>{/* Add an icon */}</ListItemIcon>
            <ListItemText primary="Trending" />
          </ListItem>
          {/* Add more sidebar items */}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;