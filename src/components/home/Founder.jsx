import React from 'react';
import { FaUser } from 'react-icons/fa';

const Founder = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">

        {/* Left Side: User Icons and Heading */}
        <div className="flex flex-col mb-4 lg:mb-0 lg:mr-12">
          <div className="flex space-x-4 mb-4">
            {/* User Icons */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FaUser className="text-purple-800 text-2xl" />
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FaUser className="text-purple-800 text-2xl" />
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FaUser className="text-purple-800 text-2xl" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">FOUNDERS</p>
            <p className="text-sm">OF HALO LAB</p>
          </div>
        </div>

        {/* Right Side: Text and Rounded Boxes */}
        <div className="flex-1 ml-10
        ">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-center lg:text-left mb-8">
            <span className='ml-24'>Over the past 10 years,</span> <br
            ></br>we've perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let's aim for the top together!
          </h1>
        </div>
      </div>
      {/* buttom  rounded conttainer start from here  */}
      <div className="flex flex-wrap justify-center items-center space-x-4 lg:space-x-8 mt-10">
        <div className=" bg-opacity-20 border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-64 h-64">
          <div className="text-4xl mb-4 flex items-center justify-center w-20 h-20 bg-white rounded-full">
            🏆
          </div>
          <p className="text-lg font-semibold text-center">
            #1 Team in the world <br /> on Dribbble
          </p>
        </div>

        <div className="bg-opacity-20 border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-64 h-64">
          <div className="text-4xl mb-4 flex items-center justify-center w-20 h-20 bg-white rounded-full">
            🌍
          </div>
          <p className="text-lg font-semibold text-center">
            Top 100 Global Service Providers by Clutch
          </p>
        </div>

        <div className=" border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-64 h-64">
          <div className="text-4xl mb-4 flex items-center justify-center w-20 h-20 bg-white rounded-full">
            ⭐
          </div>
          <p className="text-lg font-semibold text-center">
            5 Stars Rating on GoodFirms
          </p>
        </div>

        <div className=" border border-white border-opacity-50 rounded-full py-8 px-6 flex flex-col items-center w-64 h-64">
          <div className="text-4xl mb-4 flex items-center justify-center w-20 h-20 bg-white rounded-full">
            ✔️
          </div>
          <p className="text-lg font-semibold text-center">
            100% Job Success on Upwork
          </p>
        </div>
      </div>

    </div>
  );
};

export default Founder;
