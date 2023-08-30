/* eslint-disable no-unused-vars */
import { Container, TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from '@mui/icons-material/Mic';
import React, { useState } from 'react'

const SearchBar = () => {
    // const [searchTerm, setSearchTerm] = useState("");

    // const handleChange = (event) => {
    //   setSearchTerm(event.target.value);
    // };
  
  return (
    <div>
    <Container>
    <form>
    <TextField
      id="search"
      type="search"
      label="Youtube"
    //   value={searchTerm}
    //   onChange={handleChange}
    
      sx={{ width: {
        xs: 250,
        sm: 400,
        md:600
      }, mt:{
        xs:1,
        md:0
      }}}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit">
            <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        style: {
            borderRadius: "25px",
          }
      }}
    />
    </form>
  </Container>
  </div>
  )
}

export default SearchBar;