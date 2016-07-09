import React from 'react';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  )
};

export default VideoList;

/*
 * NOTES:
 * - <ul className...> is a react syntax that allows for avoiding conflicts with es6 class keyword
 *
 */