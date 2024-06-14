import React from "react";
import url1 from "./../assets/Gulabi Sadi Ani Lali_320(PagalWorld.com.sb).mp3";

const SimplePlayer = () => {
  return (
    <div>
      <audio controls>
        <source src={url1} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SimplePlayer;
