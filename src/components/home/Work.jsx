import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import workIconVideo from '../../assets/workIconVideo.mp4';
import bookVideo from '../../assets/bookVideo.mp4';
import ecommerceVideo from '../../assets/ecommerceVideo.mp4';
import healthcare from '../../assets/healthcare.mp4';
import realStateVideo from '../../assets/realStateVideo.mp4';
import whiteBg from '../../assets/whiteBg.png';


const bgImage = {
  backgroundImage: `url(${whiteBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center", // Apply this only for small screens up to 768px
};

// Media query to adjust background position for larger screens
const mediaQueryStyle = `
  @media (min-width: 768px) {
    .work-container {
      background-position: initial !important;
    }
  }
`;

const sliderData = [
  {
    title: 'REAL ESTATE',
    heading: '$40 Million Raised by Mighty Buildings in Series B',
    description: 'We enhanced Mighty Buildings’ web portal and configurator. They have grown to 100+ employees and secured $100M in investment.',
    video: realStateVideo,
  },
  {
    title: 'HEALTH CARE',
    heading: 'Kinetik Platform with over 3500+ Integrated Providers',
    description: 'We helped Kinetik in developing an app and a convenient analytics dashboard — by the end of 2022, they raised over $20M in funding.',
    video: healthcare,
  },
  {
    title: 'E-COMMERCE, CONSUMER PRODUCTS & SERVICES',
    heading: 'Bookclub24 — #1 German Online Library for Book Collectors',
    description: 'By assisting Bookclub24 with full-stack development and branding, we propelled the company to attract book lovers worldwide.',
    video: bookVideo,
  },
];

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div
      className="p-6 md:p-10 min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(0deg, rgba(164,133,19,1) 0%, rgba(10,9,70,1) 37%, rgba(7,4,56,1) 100%)",
      }}
    >
      {/* Inject media query style */}
      <style>{mediaQueryStyle}</style>
      <div className="work-container p-6 md:p-10 shadow-xl max-w-5xl w-full" style={bgImage}>
        {/* Upper container */}
        <div className="flex flex-row md:flex-row items-start justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            OUR <br /> WORKS
          </h2>
          {/* Top right side or video container */}
          <div className="flex md:flex-row items-start space-x-0 md:space-x-4 w-full md:w-auto mt-8 ml-8 md:mt-12">
            <h3 className="hidden md:block text-gray-700 mr-10">
              Business challenges are tough, but we <br />
              have a proven record of elevating our <br />
              partners to their next and best selves.
            </h3>
            <div className="h-16 w-16 ml-6 bg-white rounded-full flex items-center justify-center border border-gray-400">
              <video className="w-full h-full object-cover rounded-full" autoPlay loop muted>
                <source src={workIconVideo} type="video/mp4" />
              </video>
            </div>
            <motion.button
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 1,
                delay: 0.8,
                duration: 0.6,
              }}
              className="hidden md:block bg-black p-2 md:p-3 rounded-full text-white mt-4 md:mt-0"
            >
              ▶
            </motion.button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="flex bg-gray-100 flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto p-2 space-y-6 lg:space-y-0">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 space-y-4 px-2 mt-2">
            <h4 className="text-sm uppercase text-gray-500">{sliderData[currentSlide].title}</h4>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">{sliderData[currentSlide].heading}</h2>
            <p className="text-gray-700">{sliderData[currentSlide].description}</p>

            {/* Fixed Arrows */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 bg-gray-400 text-black rounded-full shadow flex items-center justify-center hover:bg-gray-200"
              >
                <MdArrowBackIos />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-10 h-10 bg-gray-400 text-black rounded-full shadow flex items-center justify-center hover:bg-gray-200"
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>

          {/* Right Side: Video */}
          <div className="lg:w-1/2">
            <video
              className="w-full h-full object-cover rounded-lg p-2"
              style={{ borderRadius: "60px 10px 10px 10px" }}
              autoPlay
              loop
              muted
              src={sliderData[currentSlide].video}
              type="video/mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
