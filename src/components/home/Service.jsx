import React from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
      <div className="bg-white rounded-lg p-6 md:p-10 shadow-xl max-w-5xl w-full" style={{ borderRadius: "0 78px 10px 20px" }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">OUR <br /> SERVICES</h2>
          <div className="flex items-center space-x-4">
            <motion.div 
            initial={{ x: 60, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{
            type: "spring",
            stiffness: 100,
            delay:0.8,
            duration:0.6
          }}
            className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center border border-gray-400">
              <FaUser className="text-purple-800 text-2xl md:text-3xl" />
            </motion.div>
            <motion.button 
            initial={{ x: -60, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{
            type: "spring",
            stiffness: 100,
            damping:1,
            delay:0.8,
            duration:0.6
          }}
            className="bg-black p-2 md:p-3 rounded-full text-white">▶</motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="text-2xl md:text-3xl text-purple-700">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <a href="#" className="mt-4 text-purple-700 block">
                ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
