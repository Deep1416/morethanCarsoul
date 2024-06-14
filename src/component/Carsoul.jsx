import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import your CSS file here
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

const thoughts = [
  {
    shayari: "When I lost, I find you....",
    des: "Do you have a map? Because I just keep getting lost in your eyes every time I see you. Your gaze pulls me in, leaving me breathless and enchanted....",
  },
  {
    shayari: "In your eyes, I found my home....",
    des: "If kisses were snowflakes, I'd send you a blizzard. Each kiss, a testament of my affection, would cover you, reminding you how deeply I cherish you....",
  },
  {
    shayari: "Your smile is my sunshine....",
    des: "I must be a snowflake, because I've fallen for you. Your warmth melts my heart, bringing joy and light into my life every single day....",
  },
  {
    shayari: "Every moment with you is a treasure....",
    des: "Are you a magician? Because whenever I look at you, everyone else disappears. Your presence is magical, making the world fade away as I focus on you....",
  },
  {
    shayari: "Your love is my anchor....",
    des: "If you were a vegetable, you'd be a cute-cumber. Your sweetness and charm captivate me, anchoring my heart in a sea of love and tenderness....",
  },
  {
    shayari: "In your embrace, I find peace....",
    des: "If you were a fruit, you'd be a fine-apple. Your embrace is a sanctuary where I find comfort and tranquility, rejuvenating my soul with your love....",
  },
  {
    shayari: "Your presence is my comfort....",
    des: "Do you have a Band-Aid? Because I just scraped my knee falling for you. Your presence heals my wounds, offering solace and warmth in times of need...",
  },
];

const songs = [song1, song2, song3, song4, song5, song6];

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio(songs[0]));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    audio.pause();
    const newAudio = new Audio(songs[startIndex]);
    setAudio(newAudio);
    if (playing) {
      newAudio.play();
    }
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
      <div className="relative z-10 flex items-center justify-center gap-32">
        <div className="w-64 h-72 bg-transparent p-4 text-white backdrop-blur-sm shadow-2xl shadow-black rounded-md">
          <h2 className="text-2xl font-bold capitalize mb-4">
            "{thoughts[startIndex].shayari}"
          </h2>
          <p className="text-base">{thoughts[startIndex].des}</p>
        </div>
        <div className="flex items-center gap-5">
          {displayedImages.map((src, index) => (
            <div
              key={index}
              className="w-64 h-80 carsoulProp rounded-md"
              onClick={handleNext}
            >
              <img src={src} alt="" className="w-full h-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
      <button className="z-50 bg-black text-white p-2 rounded" onClick={toggle}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Carousel;
