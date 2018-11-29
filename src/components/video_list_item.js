import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; is the same thing as {video} in the function argument. The object in the argument has a property called "video". grab that video and declare a new variable called video

  //dig through video object for thumbnail URL
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //when a user clicks on this list item (onClick), the onVideoSelect function will run that has been passed from App to VideoList to here. Function will run with the video that has been passed to this list item
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>

    </li>
  );
};

export default VideoListItem;
