import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import your CSS file here
import song1 from "./../assets/Gulabi Sadi Ani Lali_320(PagalWorld.com.sb).mp3";
import song2 from "./../assets/Janam Pe Janam_320(PagalWorld.com.sb).mp3";
import song3 from "./../assets/Maan Meri Jaan_320(PagalWorld.com.sb).mp3";
import song4 from "./../assets/Teri Ada_320(PagalWorld.com.sb).mp3";
import song5 from "./../assets/O Mahi O Mahi_320(PagalWorld.com.sb).mp3";
import song6 from "./../assets/Oops_320(PagalWorld.com.sb).mp3";
import { thoughts } from "./../assets/Thoughts";

const images = [
  "https://images.unsplash.com/photo-1689602037070-fec2eca3f5b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1718125188885-7ce699512931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1718198500377-99a629a057c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1709309934434-448b98065f66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718062455499-c362df48a68d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718116088537-212b192d1ad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
];

const songs = [song1, song2, song3, song4, song5, song6];

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio(songs[0]));

  useEffect(() => {
    audio.play();
    const handleAudioEnd = () =>
      setStartIndex((prevIndex) => (prevIndex + 1) % songs.length);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [audio]);

  useEffect(() => {
    audio.pause();
    const newAudio = new Audio(songs[startIndex]);
    newAudio.play();
    setAudio(newAudio);

    return () => newAudio.pause(); // Ensure newAudio is cleaned up if it changes
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const displayedImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="bg-overlay"></div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`w-full h-full object-cover bgImages ${
              index === startIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="relative z-10 flex items-center justify-center gap-32 ">
        <div className="w-64 h-72 bg-transparent p-4 text-white backdrop-blur-sm shadow-2xl shadow-black rounded-md">
          <h2 className="text-2xl font-bold capitalize mb-4">
            "{thoughts[startIndex].shayari}"
          </h2>
          <p className="text-base">{thoughts[startIndex].des}</p>
        </div>
        <div className="flex items-center gap-5 ">
          {displayedImages.map((src, index) => (
            <div
              key={startIndex + index} // Use unique keys
              className="w-64 h-80 carsoulProp rounded-md"
              onClick={handleNext}
            >
              <img src={src} alt="" className="w-full h-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
