import React from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import serviceVideo from '../../assets/serviceVideo.mp4';
import whiteBg from '../../assets/whiteBg.png';

const bgImage = {
  backgroundImage: `url(${whiteBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// Media query to remove background position center for screens larger than 768px
const mediaQueryStyle = `
  @media (min-width: 768px) {
    .service-container {
      background-position: initial !important;
    }
  }
`;

const services = [
  {
    title: 'Discovery',
    description: 'To lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.',
    icon: '🔍',
  },
  {
    title: 'Design',
    description: "By putting users' needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.",
    icon: '🎨',
  },
  {
    title: 'Development',
    description: 'The motto of our development process is creating digital experiences that are both appealing and functional.',
    icon: '💻',
  },
  {
    title: 'Marketing',
    description: 'With various tools, our experts can help you expand the target audience and increase brand awareness.',
    icon: '📈',
  },
];

const Service = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 p-6 md:p-10 min-h-screen flex justify-center items-center">
      {/* Inject media query style */}
      <style>{mediaQueryStyle}</style>
      <div
        className="service-container p-6 md:p-10 shadow-xl max-w-5xl w-auto"
        style={bgImage}
      >
        {/* Upper container */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">OUR <br /> SERVICES</h2>
          {/* Top right side or video container */}
          <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-10">
            <div className="w-full h-52 md:h-16 md:w-16 bg-white rounded-md md:rounded-full flex items-center justify-center border border-gray-400">
              <video
                className="w-full h-full object-cover rounded-md md:rounded-full"
                autoPlay
                loop
                muted
              >
                <source src={serviceVideo} type="video/mp4" />
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
                duration: 0.6
              }}
              className="hidden md:block bg-black p-2 md:p-3 rounded-full text-white mt-4 md:mt-0">
              ▶
            </motion.button>
          </div>
        </div>

        {/* Cards for large screens */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 p-4 md:p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 flex flex-col sm:flex-row items-start">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:w-1/3 flex items-center justify-center">
                <div className="text-3xl md:text-4xl text-purple-700">{service.icon}</div>
                <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 ml-4 hover:bg-black">
                  <MdArrowOutward className="text-xl text-black hover:text-white" />
                </div>
              </div>
              <div className="sm:w-2/3 pl-0 sm:pl-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Showing icon and title in mobile screens */}
        <div className="sm:hidden flex flex-col items-center space-y-4 w-full">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-300 p-4 rounded-xl shadow-lg flex items-center space-x-4 w-full">
              <div className="text-3xl text-purple-700">{service.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
