/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Videos } from '../components'
import ChannelCard from "../Cards/ChannelCard";
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import { Context } from '../context/contextApi';
import { Box } from '@mui/material';
import { Padding } from '@mui/icons-material';

// page - /channel
const ChannelPage = () => {

  const {id} = useParams();  // url ->  /channel/:ASBHUDWHSD

  const [channel, setChannel] = useState(null);
  const {videos, setVideos} = useContext(Context);

  // console.log(videos);

  useEffect(()=>{

    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>{
      // console.log(data[0]);
      setChannel(data[0]);
    });

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setVideos(data);
    })

  }, [id, setVideos])

  return (
    <Box minHeight="95vh" sx={{padding:"20px", margin:"20px"}}>
      <Box>
        <ChannelCard channelDetail={channel}/>
      </Box>
        <Videos videos={videos} />
    </Box>
  )
}

export default ChannelPage