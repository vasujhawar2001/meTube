import { Box, Grid } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  // console.log(videos);
  return (
    <Grid container spacing={2}>
      {videos.map((item, idx) => (
        <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
          <Box>
            {item.id.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default Videos