/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, Grid, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Videos } from '../components'
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
    <Box>
      <Box sx={{paddingLeft:{xs:4,md:8}, mt:2, mb:2}}>
      <Typography variant='h5'>{selectedCategory} Videos</Typography>
      </Box>
      <Box sx={{padding:{sm:2,md:4}, marginLeft:{xs:"30px"}}}>
      <Videos videos={videos}/>
      </Box>
    </Box>
    </>
  )
}

export default Home