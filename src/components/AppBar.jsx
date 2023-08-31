
import { Avatar, Box, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import {SearchBar, SideBar} from './';

const AppBar = () => {

  return (
    <div>
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      position="sticky"
      background="#ffff"
      justifyContent="space-between"
    >
      <Toolbar sx={{paddingLeft:{
        xs:"15px",
        md:"20px"
      }}}>
          <SideBar /> 
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" height={80} className="logo-link"/>
            </Link>
      </Toolbar>

      <SearchBar />
      <Box sx={{mr:{xs:"5px", md:"15px"}}}>
        <a href="https://github.com/vasujhawar2001">
        <Avatar
          alt="Vasu Jhawar"
          src="https://avatars.githubusercontent.com/u/59659588?v=4"
          sx={{ width:51, height:51}}
        />
        </a>
      </Box>
    </Box>
    </div>
  )
}

export default AppBar