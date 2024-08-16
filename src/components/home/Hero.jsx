import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import big from '../../assets/big.png';
import cool from '../../assets/cool.png';
import smart from '../../assets/smart.png';
import tech from '../../assets/tech.png';
import video1 from '../../assets/home-story-2.mp4';
import video2 from '../../assets/home-story-2.mp4';
import video3 from '../../assets/home-story-2.mp4';

const Hero = () => {
  const words = ["TECH", "SMRT", "COOL", "BUZZ", "BIG"];
  const images = [big, cool, smart, tech, big];
  
  const videoSlides = [video1, video2, video3];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeLoaderIndex, setActiveLoaderIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setActiveLoaderIndex((prevIndex) => (prevIndex + 1) % 3);
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSlides.length);
    }, 5000);

    return () => clearTimeout(videoTimer);
  }, [currentVideoIndex]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-[#0e0e30] text-white p-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[65%_35%] gap-8 items-center">
        {/* Left Side */}
        <div
          className="bg-blue-600 p-8 rounded-lg relative"
          style={{ borderRadius: "40px 0 40px 40px" }}
        >
          <div className="absolute top-[140px] right-[90px]">
            <img
              src={images[currentWordIndex]}
              alt="3D Icon"
              className="w-24 h-24"
            />
          </div>
          <h1
            className="text-21xl md:text-5xl font-bold leading-tight"
            style={{ fontSize: "7rem" }}
          >
            LET’S BUILD
            <br />
            THE NEXT
            <br />
            <span>{words[currentWordIndex]}</span> THING
          </h1>
          <div className="bg-gray-200 h-0.5 mt-2"></div>
          <div className="flex items-center justify-evenly">
            <div className="flex items-center">
              <h1 className="text-[4rem] font-semibold mt-4">10Y </h1>
              <h2 className="mt-4 ml-4">
                OF DESIGN-DRIVEN <br />
                PRODUCT DEVELOPMENT
              </h2>
            </div>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full flex items-center space-x-2">
              <span>⚡</span>
              <span>LET’S TALK</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative h-full">
          {/* Loader Bars */}
          <div className="flex space-x-4 mb-6">
            <div className={`w-1/3 loader`} ></div>
            <div className={`w-1/3 loader`}></div>
            <div className={`w-1/3 loader`}></div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-6">Explore Our Features</h2>

          {/* Video Slider */}
          <div className="h-full">
            <Slider {...settings} className="h-full">
              {videoSlides.map((video, index) => (
                <div key={index} className="p-1 h-full flex items-center">
                  <div className="bg-white p-2 rounded-lg shadow-lg w-full h-full">
                    <video 
                      src={video}
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default Hero;