import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Import your CSS file here
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import song1 from "./../assets/Gulabi Sadi Ani Lali_320(PagalWorld.com.sb).mp3";
import song2 from "./../assets/Janam Pe Janam_320(PagalWorld.com.sb).mp3";
import song3 from "./../assets/Maan Meri Jaan_320(PagalWorld.com.sb).mp3";
import song4 from "./../assets/Teri Ada_320(PagalWorld.com.sb).mp3";
import song5 from "./../assets/O Mahi O Mahi_320(PagalWorld.com.sb).mp3";
import song6 from "./../assets/Oops_320(PagalWorld.com.sb).mp3";

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
  const audioRef = useRef(new Audio());
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    audioRef.current.addEventListener("canplaythrough", () => {
      setAudioLoaded(true);
    });

    return () => {
      audioRef.current.removeEventListener("canplaythrough", () => {});
    };
  }, []);

  useEffect(() => {
    if (audioLoaded) {
      audioRef.current.pause();
      audioRef.current.src = songs[startIndex];
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [startIndex, audioLoaded]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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
        <img
          src={images[startIndex]}
          alt=""
          className="w-full h-full object-cover bgImages"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center gap-40">
        <div className="w-64 h-80 border border-black bg-white p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          quas nobis voluptates aut iure quod sed explicabo distinctio
          veritatis repellendus, dolore labore corporis, voluptate laborum
          praesentium nam quae beatae optio deleniti! Expedita illum voluptas
          animi sit ducimus quam porro.
        </div>
        <div className="flex items-center gap-5">
          <div className="text-red-400 absolute z-50" onClick={handlePrev}>
          < FaRegArrowAltCircleLeft className="text-3xl" />
          </div>

          {displayedImages.map((src, index) => (
            <div key={index} className="w-64 h-80 carsoulProp rounded-md">
              <img src={src} alt="" className="w-full h-full rounded-md" />
            </div>
          ))}

          <button className="text-red-400 absolute right-0" onClick={handleNext}>
            < FaRegArrowAltCircleRight className="text-3xl" />
          </button>
        </div>
      </div>
      <audio ref={audioRef} autoPlay />
    </div>
  );
};

export default Carousel;
