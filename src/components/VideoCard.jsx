import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia, Avatar, Typography } from "@mui/material";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { demoProfilePicture, demoThumbnailUrl } from "../utils/constants";
import timeAgo from "../utils/timeAlgo";

const VideoCard = ({ video }) => {

  return (
    <Card>
      <CardMedia>
        <img
          src={demoThumbnailUrl}
          alt=""
        />
      </CardMedia>
      <CardContent>
        <div>
          <Avatar
            src={demoProfilePicture}
          />
          <div>
            {video?.snippet.title}
          </div>
        </div>
        <div >
          <Typography>
            {video?.snippet?.channelTitle}
            <BsFillCheckCircleFill/>
          </Typography>
          <div>
            <Typography>
              1M views
            </Typography>
            <Typography>
              {video && timeAgo(video?.snippet.publishTime)}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
