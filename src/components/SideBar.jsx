import React, { useContext, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, ListItemAvatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { categories, logo } from '../utils/constants';
import { Context } from '../context/contextApi';
import { githubUrl } from '../utils/constants';

const useStyles = makeStyles((theme) => ({
    largeMenuIcon: {
      fontSize: "1.5rem", // Adjust the font size as needed
    },
  }));
  

export const SideBar = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {selectedCategory, setSelectedCategory} = useContext(Context);

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
              <ListItem className='category-btn' button key={index}
              onClick={()=>category.type==="menu"?
              window.location = {githubUrl} :
              setSelectedCategory(category.name)}>
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

export default SideBar;