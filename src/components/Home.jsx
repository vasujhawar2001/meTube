/* eslint-disable no-unused-vars */
import { Box, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Sidebar from './SideBar'
import Videos from './Videos'
import { fetchAPI } from '../utils/fetchAPI'

const Home = () => {

  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${selectedCategory}`);
  },[])

  return (
    <>
    <Typography variant='h3'>Latest Videos</Typography>

    <Videos />
    </>
  )
}

export default Home