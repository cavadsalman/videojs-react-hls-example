import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const videoJsOptions = {
    controls: true,
    responsive: true,
    sources: [{
      src: 'https://assets.metaflix.az/hls_demo/sample_video.m3u8',
      type: 'application/x-mpegURL'
    }]
  };

export const VideoJS = (props) => {
  const videoRef = React.useRef();
  const [player, setPlayer] = React.useState()


  React.useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement && !player) {
      const player = videojs(videoElement, videoJsOptions)
      setPlayer(player)
    }
  }, [])

  React.useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
        setPlayer(null);
      }
    };
  }, [player]);

  return (
    <div data-vjs-player>
      <video id='video-player' ref={videoRef} className='video-js vjs-big-play-centered'/>
    </div>
  );
}

export default VideoJS;