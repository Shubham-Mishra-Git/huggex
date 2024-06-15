import React from 'react';
import group from '../Group 99.png';

export default function Group99() {
  return (
    <div className='bg-[#F7FDFF] space-y-24 pb-10'>

      <div className='m-4 pt-10 lg:m-10 lg:pt-20'>
        <div className='italic space-x-2 font-bold text-xl sm:text-2xl lg:text-3xl mb-10'>
          <span className='text-black'>Your</span>
          <span className='text-[#0096C8]'>Hobby</span>
          <span className='text-black'>,&nbsp;Your</span>
          <span className='text-[#8064A2]'>Community...</span>
        </div>
        <div>
          <button className='border-2 rounded-lg bg-[#8064A2] px-5 py-1 text-white'>Get Started</button>
        </div>
      </div>

      <div className='w-full lg:w-[1240px] h-auto lg:h-[302px] mx-auto'>
        <img src={group} alt="Group" className='w-full h-auto' />
      </div>
      
    </div>
  );
}
