import React from 'react';

const VideoDetail = ({video}) => {
  //checks if a video exist, if it does not, it displays a div that says loading. Avoids errors because the parent component tries to render the video player immediately before the api call is completed
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;

  //backtick (``) denotes string interpolation which lets us inject a javascript variable (here it's ${videoId} into a string to clean up the code)
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )

};

export default VideoDetail;
