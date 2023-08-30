import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia, Avatar, Typography } from "@mui/material";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { demoProfilePicture, demoThumbnailUrl, demoChannelTitle, demoVideoUrl, demoChannelUrl } from "../utils/constants";
import timeAgo from "../utils/timeAlgo";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {

    const videoId = video.id.videoId;
    const channelId = video.id.channelId;  // wierd API

  return (
    <Card sx={{borderRadius:5}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia>
            <img
            src={video?.snippet.thumbnails?.high?.url || demoThumbnailUrl}
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
            />
        </CardMedia>
      </Link>
      <CardContent>
        
            <div style={{ display: "grid", gridGap: "8px", gridTemplateColumns: "auto 1fr", marginBottom:"10px"}}>
                <Avatar
                src={demoProfilePicture}
                sx={{ width: 32, height: 32, marginRight: 1 }}
                />
                <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <Typography fontWeight="bold" variant="subtitle2">
                    {video?.snippet.title.slice(0,50)}
                </Typography>
                </Link>
            </div>
            <div style={{marginLeft:"40px"}}>
                <Link to={ channelId ? `/video/${channelId}`: demoChannelUrl}>
                <div>
                    <Typography variant="subtitle2" fontWeight="500" sx={{fontSize:"12px"}}>
                    {video?.snippet?.channelTitle}&nbsp;<BsFillCheckCircleFill/> 
                    </Typography>
                </div>
                <div>
                    <Typography variant="body2" color="GrayText" sx={{fontSize:"12px"}}>
                    1M views
                    </Typography>
                    <Typography variant="body2" color="GrayText" sx={{fontSize:"12px"}}>
                    {video && timeAgo(video?.snippet.publishTime)}
                    </Typography>
                </div>
                </Link>
            </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
