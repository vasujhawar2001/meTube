import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Videos } from '../components';
import { fetchAPI } from '../utils/fetchAPI';
import { Context } from '../context/contextApi';

const SearchFeed = () => {

  const {videos, setVideos, setLoading} = useContext(Context);
  const {searchQuery} = useParams();

  useEffect(()=>{
    setLoading(true);
    fetchAPI(`search?part=snippet&q=${searchQuery}`)
    .then((data)=>{
      // console.log(data);
      setVideos(data)
      setLoading(false);
    })
  },[searchQuery])

  return (
    <Box>
      <Box sx={{paddingLeft:{xs:4,md:8}, mt:2, mb:2}}>
      <Typography variant='h5'>Search Results
      </Typography>
      </Box>
      <Box sx={{padding:{sm:2,md:4}, marginLeft:{xs:"30px"}}}>
      <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default SearchFeed