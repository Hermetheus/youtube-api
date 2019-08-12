import { Grid } from "@material-ui/core";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />
  ));

  return (
    <Grid container spacing={4}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
