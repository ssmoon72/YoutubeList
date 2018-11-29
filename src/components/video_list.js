//This component simply displays the list of videos, as such it has no need for persistent data and can be written as a functional component.
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  /* runs the callback function (video) => {} for each item in the array props.video

  the callback function creates a VideoListItem component each time it is run and passes an individual video object from props.video array as a prop to the VideoListItem component

  use the etag of the video contained in the API call as a unique identifier for each list item
  */
  const videoItems = props.videos.map((video) => {
    //the onVideoSelect function has been passed through from the App component so is now a prop of the video_list component. Here we are passing it through to the VideoListItem component so that when a user clicks on a video, it is displayed as the selected video
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
