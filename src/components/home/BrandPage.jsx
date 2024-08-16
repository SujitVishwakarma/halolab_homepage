import React from 'react';

const BrandPage = () => {
  return (
    <div className="bg-[#0b0b36] h-screen flex items-center justify-center main-conatiner mt-[96px] mb-[108px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-screen-lg p-4">
        
        {/* Oppo */}
        <div className="relative flex items-center justify-center border-b border-r border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">Oppo</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            Oppo is a leading global smart device brand.
          </p>
        </div>

        {/* Udemy */}
        <div className="relative flex items-center justify-center border-b border-r border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">Udemy</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            Udemy is an online learning platform.
          </p>
        </div>

        {/* JBL */}
        <div className="relative flex items-center justify-center border-b border-r border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">JBL</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            JBL is a brand known for its speakers and audio equipment.
          </p>
        </div>

        {/* Creative Market */}
        <div className="relative flex items-center justify-center border-b border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">Creative Market</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            Creative Market is a marketplace for design assets.
          </p>
        </div>

        {/* Seneca */}
        <div className="relative flex items-center justify-center border-r border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">SENCA</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            Seneca is an innovative online learning platform.
          </p>
        </div>

        {/* Auth0 */}
        <div className="relative flex items-center justify-center border-r border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">Auth0</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            Auth0 provides authentication and authorization services.
          </p>
        </div>

        {/* Corel */}
        <div className="relative flex items-center justify-center border-r border-gray-500 h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">Corel</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            Showcasing a future vision for WinZip family products.
          </p>
        </div>

        {/* Globe */}
        <div className="relative flex items-center justify-center h-32 md:h-40 group">
          <h1 className="text-white text-xl md:text-2xl group-hover:opacity-0 transition-opacity">Globe</h1>
          <p className="absolute text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity">
            350+ clients worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
