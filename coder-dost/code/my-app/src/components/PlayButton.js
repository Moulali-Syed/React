import React from 'react';
import './PlayButton.css';
const PlayButton = ({ children, message, onPlay, onPause }) => {
  let playing = true;
  function handleClick() {
    if (playing) {
      onPause();
      playing = false;
    } else {
      onPlay();
      playing = true;
    }
  }
  return <button onClick={handleClick}>{children}</button>;
};

export default PlayButton;
