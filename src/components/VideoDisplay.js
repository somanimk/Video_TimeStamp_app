import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

function VideoDisplay({ videoUrl, seekToTime, captions, setCurrentCaption }) {
  const playerRef = useRef(null);

  // Seek video to a specific time
  useEffect(() => {
    if (seekToTime !== null && playerRef.current) {
      playerRef.current.seekTo(seekToTime, 'seconds');
    }
  }, [seekToTime]);

  // Update caption dynamically based on video playback time
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const activeCaption = captions.find(
          (caption) =>
            currentTime >= caption.startTime && currentTime <= caption.endTime
        );

        // Update caption or clear if no active caption
        setCurrentCaption(activeCaption ? activeCaption.text : '');
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [captions, setCurrentCaption]);

  return (
    <div className="video-container" style={{ maxWidth: '720px', margin: '20px auto' }}>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing
        controls
        width="100%"
        height="230px"
      />
    </div>
  );
}

export default VideoDisplay;

