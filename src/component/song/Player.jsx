import React from "react";
import useAudio from "./UseAudio" // Import the custom hook


const Player = ({ url }) => {
  const { playing, toggle, volume, setVolume, currentTime, duration } = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      {/* <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
      <div>
        {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)} / {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => seek(e.target.value)}
      /> */}
    </div>
  );
};

export default Player;
