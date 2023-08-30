import React from 'react'
import Loader from './Loader';
import { Box, Grid, Stack } from '@mui/material';
import VideoCard from '../Cards/VideoCard';
import ChannelCard from '../Cards/ChannelCard';

const VideoSuggestion = ({videos}) => {

    if(!videos?.length) return <Loader />;
    return (
      
        <Stack direction={"column"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map((item, idx) => (
          <Grid key={idx} item xs={10} sm={6} md={4} lg={3}>
            <Box>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          </Grid>
        ))}
      </Stack>
    )
}

export default VideoSuggestion