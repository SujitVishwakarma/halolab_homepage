import React from 'react'

const Clutch = () => {
  return (
    <div className='main-container flex flex-col lg:flex-row mt-8 min-h-64 space-y-6 lg:space-y-0'>
      {/* Left side container */}
      <div className='w-full lg:w-3/10 flex justify-center lg:justify-center items-center top-0'>
        <button className='border border-white rounded-lg p-2 flex items-center lg:ml-14'>
          <span className='text-lg lg:text-2xl'>Clutch | </span>
          <span className='text-sm lg:text-base ml-2'>70+ REVIEWS</span>
        </button>
      </div>
      {/* Right side container */}
      <div className='w-full lg:w-13/20 text-center lg:text-left lg:text-5xl lg:mr-14 hover:text-slate-400'>
        <span className='block text-2xl lg:text-5xl'>We've helped hundreds of</span>
        <h1 className='text-xl lg:text-4xl mt-4'>
          partners, ranging from startups <br className='hidden lg:block' />
          to medium-sized businesses to achieve their <br className='hidden lg:block' />
          goals. And stellar feedback — is our reward!
        </h1>
      </div>
    </div>
  )
}

export default Clutch
