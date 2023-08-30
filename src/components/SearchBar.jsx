/* eslint-disable no-unused-vars */
import { Container, TextField, InputAdornment, IconButton, Paper } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from '@mui/icons-material/Mic';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

  return (
    <div>
    <form
      onSubmit={handleSubmit}>
    <TextField
      id="search"
      type="search"
      label="Youtube"
      value={searchTerm}
      onChange={(event)=> setSearchTerm(event.target.value)}
      onSubmit={handleSubmit}
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
  </div>
  )
}

export default SearchBar;