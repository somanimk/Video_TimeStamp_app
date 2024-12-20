import React, { useState } from 'react';
import VideoInput from './components/VideoInput';
import CaptionEditor from './components/CaptionEditor';
import VideoDisplay from './components/VideoDisplay';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [seekToTime, setSeekToTime] = useState(null);
  const [currentCaption, setCurrentCaption] = useState('');

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
    setSeekToTime(caption.startTime); 
    setCurrentCaption(caption.text);
  };

  const handleSeek = (time, captionText) => {
    setSeekToTime(time);
    setCurrentCaption(captionText);
  };

  return (
    <div className="App">
      <div className="title">CaptionMate</div>

      <div className="left-panel">
        <VideoInput setVideoUrl={setVideoUrl} />
        <CaptionEditor addCaption={addCaption} />
      </div>

      <div className="right-panel">
        <VideoDisplay
          videoUrl={videoUrl}
          seekToTime={seekToTime}
          captions={captions}
          setCurrentCaption={setCurrentCaption}
        />

        {/* Caption Bar */}
        <div className="caption-bar">{currentCaption}</div>

        {/* Table Section */}
        <div className="table-container">
          <table className="caption-table">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Caption</th>
              </tr>
            </thead>
            <tbody>
              {captions.map((caption, index) => (
                <tr key={index}>
                  <td>{formatTime(caption.startTime)}</td>
                  <td>{formatTime(caption.endTime)}</td>
                  <td>
                    <a
                      href="#"
                      className="caption-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSeek(caption.startTime, caption.text);
                      }}
                    >
                      {caption.text}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Helper Function: Format Time to MM:SS
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default App;

