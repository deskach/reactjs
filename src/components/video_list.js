import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;

/*
 * NOTES:
 * - <ul className...> is a react syntax that allows for avoiding conflicts with es6 class keyword
 * - prefer using Array.map rather than for loop;
 * - React can render a list of components (like videoItems)
 */