import React from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from "framer-motion"
const Founder = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">

        {/* Left Side: User Icons and Heading */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{
            type: "spring",
            damping:10,
            stiffness: 100,
            delay:0.8,
            duration:0.8
        }}
          className="flex space-x-4 mb-4 justify-center lg:justify-start">
            {/* User Icons */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-x-75 hover:bg-orange-500">
              <FaUser className="text-purple-800 text-2xl" />
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-x-75 hover:bg-orange-500">
              <FaUser className="text-purple-800 text-2xl" />
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-x-75 hover:bg-orange-500">
              <FaUser className="text-purple-800 text-2xl" />
            </div>
          </motion.div>
          <div className="text-center lg:text-left">
            <p className="text-xl font-bold">FOUNDERS</p>
            <p className="text-sm">OF HALO LAB</p>
          </div>
        </div>

        {/* Right Side: Text with Left Margin on Large Screens */}
        <div className="text-center lg:text-left lg:ml-16"> {/* Added left margin here */}
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-8">
            Over the past 10 years, <br /> we've perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let's aim for the top together!
          </h1>
        </div>
      </div>

      {/* Bottom Rounded Containers */}
      <div className="flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-10">
        <motion.div
        initial={{ y: -100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{
          type: "spring",
          stiffness: 100,
          delay:0.8,
          duration:0.6
      }}
         className="bg-opacity-20 border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-56 h-56 lg:w-64 lg:h-64 text-center hover:scale-x-75">
          <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full">
            🏆
          </div>
          <p className="text-lg font-semibold">
            #1 Team in the world <br /> on Dribbble
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{
            type: "spring",
            stiffness: 100,
            delay:0.8,
            duration:0.6
      }}
         className="bg-opacity-20 border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-56 h-56 lg:w-64 lg:h-64 text-center hover:scale-x-75">
          <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full">
            🌍
          </div>
          <p className="text-lg font-semibold">
            Top 100 Global Service Providers by Clutch
          </p>
        </motion.div>

        <motion.div 
        initial={{ y: -100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{
          type: "spring",
          stiffness: 100,
          delay:0.8,
          duration:0.6
      }}
        className="border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-56 h-56 lg:w-64 lg:h-64 text-center hover:scale-x-75">
          <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full">
            ⭐
          </div>
          <p className="text-lg font-semibold">
            5 Stars Rating on GoodFirms
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{
            type: "spring",
            stiffness: 100,
            delay:0.8,
            duration:0.6
        }}
        className="border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-56 h-56 lg:w-64 lg:h-64 text-center hover:scale-x-75">
          <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full">
            ✔️
          </div>
          <p className="text-lg font-semibold">
            100% Job Success on Upwork
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;
