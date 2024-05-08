import React from 'react';
import img from './logo.png'
import home from './Vector.png'


export default function Header() {
  return (
    <div className='flex  w-screen justify-between'>
           <div className='mt-[32px] ml-10  w-[191px] h-[39px]'><img src={img} alt="" /></div>
       
            <div className='h-[48px] w-[525px] font-semibold text-[#696671] flex mt-[27px] items-center gap-[40px]'>
                  <div>Home</div>
                  <div>Flashcard</div>
                  <div>Contact</div>
                  <div>FAQ</div>
                  <button className=" text-white h-[48px] w-[128px] rounded-[32px]  bg-gradient-to-b from-blue-900 to-blue-500">Login</button>

            </div>
    </div>
  );
}
