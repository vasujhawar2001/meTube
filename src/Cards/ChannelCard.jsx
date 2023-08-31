import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({channelDetail}) =>{

    const channel = channelDetail?.snippet;
    return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop:"",
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}` }>
        <CardContent sx={{display:'flex', flexDirection:'column',
        justifyContent:'center', textAlign:'center'}} >
        <CardMedia image={channel?.thumbnails?.high?.url || demoProfilePicture} 
        sx={{
            borderRadius:"50%", height:"160px", border:"1px solid", mb:2
        }}
        />
        <Typography variant='h6'>
            {channel?.title}
            <CheckCircle sx={{fontSize:14, ml:"5px"}}/>
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
        </Link>
    </Box>
)
};

export default ChannelCard;