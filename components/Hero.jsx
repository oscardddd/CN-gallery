import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white w-1/2 z-[2] mt-[-10rem]'>
        {/* <h2 className='text-5xl font-bold'>{heading}</h2> */}
        {/* <p className='py-5 mt-1 justify text-xl'>{message}</p> */}

        <button onClick={() => window.open('/', '_self')} className='py-3 mt-2 border w-full'>Home</button>
        <br />
        <button onClick={() => window.open('/libraries', '_self')} className='py-3 mt-6 border w-full'>Gallery</button>
        <br />
        <button onClick={() => window.open('/contribute', '_self')} className='py-3 mt-6 border w-full'>Participate</button>
        <br />
      </div>
    </div>
  );
};

export default Hero;
