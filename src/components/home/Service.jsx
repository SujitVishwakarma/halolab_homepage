import React from 'react';
import { FaUser } from 'react-icons/fa';

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
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 p-10 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-10 shadow-xl max-w-5xl w-full" style={{borderRadius:"0 78px 10px 20px"}}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-bold text-gray-900">OUR <br></br> SERVICES</h2>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-400">
              <FaUser className="text-purple-800 text-3xl" />
            </div>
            <button className="bg-black p-3 rounded-full text-white">▶</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg hover:scale-75">
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-purple-700">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
                <a href="#" className="ml-auto text-purple-700">
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
