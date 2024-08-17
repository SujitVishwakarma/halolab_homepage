import React from 'react';
import auth from '../../assets/auth.png';
import corel from '../../assets/corel.png';
import creative from '../../assets/creative.png';
import jbl from '../../assets/jbl.png';
import oppo from '../../assets/oppo.png';
import senca from '../../assets/senca.png';
import udemy from '../../assets/udemy.png';
import globe from '../../assets/globe.png';

const BrandPage = () => {
  return (
    <div className="bg-[#02021e] flex items-center justify-center min-h-screen main-container mt-[96px] mb-[108px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-screen-lg p-4">
        
        {/* Image Container Example */}
        {[
          { src: oppo, alt: 'Oppo logo', description: 'Oppo is a leading global smart device brand.' },
          { src: udemy, alt: 'Udemy logo', description: 'Udemy is an online learning platform.' },
          { src: jbl, alt: 'JBL logo', description: 'JBL is a brand known for its speakers and audio equipment.' },
          { src: creative, alt: 'Creative logo', description: 'Creative Market is a marketplace for design assets.' },
          { src: senca, alt: 'Seneca logo', description: 'Seneca is an innovative online learning platform.' },
          { src: auth, alt: 'Auth0 logo', description: 'Auth0 provides authentication and authorization services.' },
          { src: corel, alt: 'Corel logo', description: 'Showcasing a future vision for WinZip family products.' },
          { src: globe, alt: 'Globe logo', description: '350+ clients worldwide.' },
        ].map((item, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center p-10 border-b border-r border-gray-500 h-32 md:h-40 group overflow-hidden rounded-lg">
            
            {/* "+" Sign */}
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full border border-white flex items-center justify-center text-white text-sm md:hidden">
              +
            </div>

            {/* Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="h-16 md:h-24 group-hover:translate-y-[-20px] transition-transform duration-300"
            />

            {/* Description */}
            <p className="absolute bottom-2 mb-2 text-white text-sm md:text-base opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BrandPage;
