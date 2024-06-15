import React from 'react';
import Add from '../Add.png';

export default function Addnew() {
  return (
    <div className='bg-[#F7FDFF] p-4 lg:p-10 flex items-center justify-center'>
      <div className='flex flex-col justify-center card border rounded-md p-5 lg:p-10 space-y-5 w-full lg:w-3/4 m-4 lg:m-10 border-[#939CA3]'>
        <div className='flex space-x-3 lg:space-x-5 text-black text-lg lg:text-xl font-bold'>
          <img src={Add} alt="Add" className='h-6 w-6 lg:h-7 lg:w-7'/>
          <p>Program</p>
        </div>
        <div>
          <p className='text-sm lg:text-base'>Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on hobbycue? Go ahead and add your own page.</p>
        </div>
        <div>
          <button className='border-2 rounded-lg border-[#8064A2] px-4 py-1 text-[#8064A2] hover:bg-[#8064A2] hover:text-white transition duration-300'>Add New</button>
        </div>
      </div>
    </div>
  );
}
