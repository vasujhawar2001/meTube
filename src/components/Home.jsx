/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, Grid, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import Sidebar from './SideBar'
import Videos from './Videos'
import { fetchAPI } from '../utils/fetchAPI'
import { Context } from '../context/contextApi'

const Home = () => {

  const {selectedCategory, videos, setVideos, setLoading} = useContext(Context);

  useEffect(()=>{
    setLoading(true);
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{
      console.log(data);
      setVideos(data)
      setLoading(false);
    })
  },[selectedCategory])

  return (
    <>
    <Typography variant='h3'>{selectedCategory} Videos</Typography>

    <Videos videos={videos}/>
    </>
  )
}

export default Home