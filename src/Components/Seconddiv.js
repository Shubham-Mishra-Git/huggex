import React from 'react';
import group from '../Group 27.png';
import google from '../Google.png';
import facebook from '../Facebook.png';
import lock from '../lock.png';

export default function Seconddiv() {
  return (
    <div className='bg-[#F7F5F9] pt-10 lg:pt-24 w-full pb-10 flex flex-wrap'>

      {/* Wrapper for centering the content */}
      <div className='w-full flex flex-col items-center lg:flex-row lg:items-start'>

        {/* image and para */}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start px-5 lg:pl-24 mb-10 lg:mb-0'>

          {/* para */}
          <div className='text-center lg:text-left'>
            <div className='italic space-x-2 font-bold text-2xl lg:text-3xl mb-10'>
              <span className='text-black'>Explore Your</span>
              <span className='text-[#0096C8]'>Hobby</span>
              <span className='text-black'>or</span>
              <span className='text-[#8064A2]'>passion</span>
            </div>
            <div className='space-y-6 lg:space-y-10 mb-10'>
              <p>
                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
              </p>
              <p>
                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
          </div>

          {/* image */}
          <div className='w-full max-w-md lg:max-w-lg mx-auto'>
            <img src={group} alt="Hobby Group" className='w-full h-auto' />
          </div>

        </div>

        {/* sign and joinin */}
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center px-4'>

          <div className='flex space-x-4 mb-4 font-bold'>
            <button className='border-b-2 border-[#8064A2] text-[#8064A2] py-2 px-4'>Sign</button>
            <button className='text-[#939CA3] py-2 px-4'>Join In</button>
          </div>

          <div className='mb-4 w-full max-w-md'>
            <div className='border py-2 px-6 border-[#939CA3] rounded-lg flex justify-between items-center mb-2'>
              <img src={google} alt="Google Icon" className='mr-2 h-5 w-5' />
              <p>Continue with Google</p>
              <p></p>
            </div>
            <div className='border py-2 px-6 border-[#939CA3]  justify-between rounded-lg flex items-center mb-2'>
              <img src={facebook} alt="Facebook Icon" className='mr-2 h-5 w-5' />
              <p>Continue with Facebook</p>
              <p></p>
            </div>
          </div>

          <div className='flex items-center mb-4 w-full max-w-md'>
            <div className='h-[1.5px] w-full bg-slate-400'></div>
            <div className='px-2'>or connect with</div>
            <div className='h-[1.5px] w-full bg-slate-400'></div>
          </div>

          <div className='flex flex-col space-y-3 mb-4 w-full max-w-md'>
            <input type="email" placeholder="Email" className='p-2 border rounded w-full' />
            <input type="password" placeholder="Password" className='p-2 border rounded w-full' />
          </div>

          <div className='flex justify-between items-center mb-4 w-full max-w-md'>
            <div className='flex items-center'>
              <input type="checkbox" className='mr-2' />
              <p>Remember me</p>
            </div>
            <div className='flex items-center cursor-pointer'>
              <img src={lock} alt="Forgot Password Icon" className='mr-2 h-4 w-4' />
              <p>Forget Password?</p>
            </div>
          </div>

          <div className='w-full max-w-md'>
            <button className='text-black border border-black py-2 px-4 w-full rounded'>Continue</button>
          </div>

        </div>
      </div>
    </div>
  );
}
