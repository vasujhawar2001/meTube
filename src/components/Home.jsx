/* eslint-disable no-unused-vars */
import { Box, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './SideBar'
import Videos from './Videos'

const Home = () => {
  return (
    <>
    <Typography variant='h3'>Latest Videos</Typography>

    <Videos />
    </>
  )
}

export default Home