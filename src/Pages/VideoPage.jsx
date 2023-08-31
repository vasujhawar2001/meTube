import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "../components";
import { fetchAPI } from "../utils/fetchAPI";
import { Context } from "../context/contextApi";
import VideoSuggestion from "../components/VideoSuggestion";

const VideoPage = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {videos, setVideos} = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data[0]));

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data));

      // console.log(videos);
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "40px", mt:1}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography variant="subtitle1" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={3} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body2">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body2">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} alignItems="center" >
          <VideoSuggestion videos={videos}/>
        </Box>
      </Stack>
  );
};

export default VideoPage;