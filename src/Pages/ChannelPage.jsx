/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Videos } from '../components'
import ChannelCard from "../Cards/ChannelCard";
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import { Context } from '../context/contextApi';

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
      setVideos(data?.items);
    })

  }, [id, setVideos])

  return (
    <div>ChannelPage</div>
  )
}

export default ChannelPage