import React from 'react';
import quote from '../quote.png';
import play from '../play.png';
import mic from '../mic.png';
import lady from '../lady.png';

export default function Testimonials() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center bg-[#F7F5F9] rounded-md p-6 lg:p-10 space-y-7 w-full lg:w-3/4 m-auto my-10 h-auto'>
        <div className='flex space-x-5 text-black text-xl font-bold'>
          <img src={quote} alt="" className='h-7 w-7' />
          <p>Testimonials</p>
        </div>
        <div>
          <p>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
        </div>

        <div className='flex flex-wrap-reverse gap-5 justify-between items-center'>
          <div className='playing bg-[#b49ad7] flex items-center justify-between h-20 p-4 rounded-md w-full  lg:w-[500px] mb-4 lg:mb-0'>
            {/* playbutton */}
            <div className='cursor-pointer ml-2 h-8 w-8 rounded-full flex justify-center items-center bg-white'>
              <img src={play} alt="" />
            </div>

            {/* line */}
            <div className='flex  cursor-pointer items-center flex-1 mx-4'>
              <div className='absolute  z-10 h-2 w-2 rounded-full bg-[#8064A2]'></div>
              <div className='relative h-[2px] flex-1 bg-[#F7F5F9] mx-2'></div>
              <p className='text-[#8064A2] cursor-default'>0:00</p>
            </div>

            {/* image */}
            <div className='flex relative'>
              <div className='h-5 w-5 z-10 mt-6 -ml-1 absolute'>
                <img src={mic} alt="" />
              </div>
              <div className='h-10 w-10 relative'>
                <img src={lady} alt="" />
              </div>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <img className="h-16 w-16 lg:h-24 lg:w-24 rounded-full" src={lady} alt="" />
            <div className='flex flex-col font-bold'>
              <p className='text-[#8064A2]'>Shubha Nagarajan</p>
              <p className='text-[#0096C8]'>Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
