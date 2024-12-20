import React, { useState } from 'react';

function CaptionEditor({ addCaption }) {
  const [captionText, setCaptionText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Convert MM:SS to Seconds
  const parseTimeToSeconds = (time) => {
    const [mins, secs] = time.split(':').map(Number);
    return mins * 60 + secs;
  };

  // Handle Submit Button
  const handleSubmit = () => {
    if (captionText && startTime && endTime) {
      const newCaption = {
        text: captionText,
        startTime: parseTimeToSeconds(startTime),
        endTime: parseTimeToSeconds(endTime),
      };

      addCaption(newCaption);

      // Clear Input Fields
      setCaptionText('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={captionText}
        onChange={(e) => setCaptionText(e.target.value)}
        placeholder="Enter Caption"
        className="input"
      />
      <div className="input-row">
        <input
          type="text"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Start Time (MM:SS)"
          className="input"
        />
        <input
          type="text"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="End Time (MM:SS)"
          className="input"
        />
      </div>
      <button onClick={handleSubmit} className="button">Add TimeStamp with caption </button>
    </div>
  );
}

export default CaptionEditor;
