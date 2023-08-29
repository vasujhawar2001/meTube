import { Avatar, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

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
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={70} />
      </Link>
      <SearchBar />
      <Box paddingRight="25px">
        <Avatar
          alt="Vasu Jhawar"
          src="https://avatars.githubusercontent.com/u/59659588?v=4"
          sx={{ width: 56, height: 56 }}
        />
      </Box>
    </Box>
    </div>
  )
}

export default AppBar