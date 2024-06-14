import { useState, useEffect } from "react";

const UseAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  // useEffect(() => {
  //   audio.volume = volume;
  // }, [volume, audio]);

  // useEffect(() => {
  //   const updateCurrentTime = () => setCurrentTime(audio.currentTime);
  //   const updateDuration = () => setDuration(audio.duration);

  //   audio.addEventListener("timeupdate", updateCurrentTime);
  //   audio.addEventListener("loadedmetadata", updateDuration);
  //   audio.addEventListener("ended", () => setPlaying(false));

  //   return () => {
  //     audio.removeEventListener("timeupdate", updateCurrentTime);
  //     audio.removeEventListener("loadedmetadata", updateDuration);
  //     audio.removeEventListener("ended", () => setPlaying(false));
  //   };
  // }, [audio]);

  // const seek = (time) => {
  //   audio.currentTime = time;
  // };

  return {
    playing,
    toggle,
    volume,
    setVolume,
    currentTime,
    duration,
    
  };
};

export default UseAudio;
