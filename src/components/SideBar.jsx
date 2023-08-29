import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, ListItemAvatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { categories, logo } from '../utils/constants';

const useStyles = makeStyles((theme) => ({
    largeMenuIcon: {
      fontSize: '2.5rem', // Adjust the font size as needed
    },
  }));

  const selectedCategory = "New";
  

export const Sidebar = () => {
const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
    {/* written by GPT */}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
        <MenuIcon className={classes.largeMenuIcon} />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div style={{ width: 225, textAlign: 'center', display:'flex', flexDirection:'row' }}> {/* Adjust the width as needed */}
          <List>
            <ListItemAvatar onClick={toggleDrawer}>
              <img src={logo} style={{height:"70px"}}></img>
            </ListItemAvatar>
          {categories.map((category, index) => (
              <ListItem className='category-btn' button key={index} style={{
                
              }}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;