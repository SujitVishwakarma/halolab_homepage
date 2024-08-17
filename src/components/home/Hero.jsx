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
import { AiOutlineThunderbolt } from "react-icons/ai";
import haloLogo from '../../assets/halologo.png';
import { BsThreeDots } from "react-icons/bs";
const Hero = () => {
  const words = ["TECH", "SMART", "COOL", "BUZZ", "BIG"];
  const images = [big, cool, smart, tech, big];
  const videoSlides = [video1, video2, video3];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeLoader, setActiveLoader] = useState(0);
  const [filledLoaders, setFilledLoaders] = useState([false, false, false]);

  useEffect(() => {
    const loadNext = () => {
      if (activeLoader < 3) {
        setFilledLoaders((prevFilled) =>
          prevFilled.map((filled, index) => (index <= activeLoader ? true : filled))
        );
        setActiveLoader((prevLoader) => prevLoader + 1);
      } else {

        setFilledLoaders([false, false, false]);
        setActiveLoader(0);
      }
    };

    const interval = setInterval(loadNext, 4000);

    return () => clearInterval(interval);
  }, [activeLoader]);

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
          className="bg-blue-600 p-4 sm:p-8 rounded-lg relative h-auto md:h-[600px] lg:h-[550px] xl:h-[600px] flex flex-col justify-between"
          style={{ borderRadius: "40px 0 40px 40px" }}
        >
          {/* Top Icon */}
          <div className="absolute top-[50px] right-[20px] sm:top-[140px] sm:right-[90px]">
            <img
              src={images[currentWordIndex]}
              alt="3D Icon"
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
          </div>

          {/* Main Content */}
          <div className="flex-grow h-[80%] flex items-center">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold leading-tight"
              style={{ lineHeight: '1.1', width: '100%' }}
            >
              LET’S BUILD
              <br />
              THE NEXT
              <br />
              <span>{words[currentWordIndex]}</span> THING
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="h-[20%] flex flex-col justify-between">
            <div className="bg-gray-200 h-0.5"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-0 space-y-4 sm:space-y-0">
              {/* Text Section (h1 and h2 in a row) */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <h1 className="text-3xl sm:text-4xl font-semibold">10Y</h1>
                <div className="leading-tight">
                  <h2>OF DESIGN-DRIVEN</h2>
                  <h2 className="whitespace-nowrap">PRODUCT DEVELOPMENT</h2>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                <button className="bg-white text-black p-2 py-1 sm:px-6 sm:py-2 rounded-full flex items-center justify-center space-x-1 sm:space-x-2 text-md sm:text-base">
                  <AiOutlineThunderbolt />
                </button>
                <button className="bg-yellow-400 text-black px-2 py-1 sm:px-6 sm:py-2 rounded-full flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-base">
                  <span>LET’S TALK</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative h-full bg-[#2a303c] py-4 rounded-lg">
          {/* Loader Bars */}
          <div className="loader-container mb-2 px-3">
            {[0, 1, 2].map((index) => (
              <div className={`loader ${filledLoaders[index] ? 'filled' : ''}`} key={index}>
                <div
                  className="progress"
                  style={{
                    animation: index === activeLoader ? 'loading 5s linear forwards' : 'none',
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Heading */}
          <div className="text-2xl font-bold flex justify-between mb-2 px-3">
            <img src={haloLogo} alt="logo" />
            <span><BsThreeDots /></span>
          </div>
          {/* Video Slider */}
          <div className="h-full">
            <Slider {...settings} className="h-full">
              {videoSlides.map((video, index) => (
                <div key={index} className="p-1 h-full flex items-center">
                  <div className="p-2 rounded-lg shadow-lg w-full h-full">
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
