
import { Avatar, Box, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import Sidebar from './SideBar'

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
      mt={0.5}
    >
      <Toolbar sx={{paddingLeft:"10px"}}>
          <Sidebar /> 
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" height={80} className="logo-link"/>
            </Link>
      </Toolbar>

      <SearchBar />
      <Box paddingRight="20px">
        <a href="https://github.com/vasujhawar2001">
        <Avatar
          alt="Vasu Jhawar"
          src="https://avatars.githubusercontent.com/u/59659588?v=4"
          sx={{ width: 56, height: 56 }}
        />
        </a>
      </Box>
    </Box>
    </div>
  )
}

export default AppBar