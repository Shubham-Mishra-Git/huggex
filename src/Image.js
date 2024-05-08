import React from 'react';
import bulb from './Frame.png'
import sound from './VectorS.png'
import loop from './VectorRound.png'
import left from './LeftARR.png'
import right from './RightArr.png'
import square from './Square.png'
import Logo from './Group 1.png'
import img from './Component 40.png'
import add from './add.png'


export default function Image() {
  return (
    <div className='flex flex-col  mt-[30px] items-center'>
       <div className=" w-[712px] h-[393.19px] rounded-[42.51px] bg-gradient-to-r from-blue-900 to-blue-700 via-blue-500 via-blue-300">

            <div className='flex justify-between'>
                <img className="w-[25px] h-[24px] mt-9 ml-10" src={bulb} alt="" />
                <img className="w-[25px] h-[24px] mt-9 mr-10" src={sound} alt="" />
            </div>

            <div className='flex justify-center items-center mt-[120px]'>
              <p className='text-white font-bold text-3xl'>9+6+7x-2x-3</p>
            </div>

       </div>

      

       <div className=' flex justify-between w-[712px] mt-10 '>
          <img src={loop} className='w-7 h-7 ml-10' alt="" />
          <div className='flex items-center gap-5'>
            <img src={left} className='h-12 w-12' alt="" />
            <p className='text- font-bold'>01/10</p>
            <img src={right} className='h-12 w-12' alt="" />
          </div>

          <img src={square} className=' mr-10 h-7 w-7' alt="" />
       </div>


       <div className='flex justify-between w-full mt-16'>
            <div className='flex h-[80px] w-[217px] ml-10'>
              <img src={Logo} className='h-[110px] w-[110px]'alt=""  />
              <div className='flex flex-col h-[100px] justify-center items-center'>
                <p className='text-[#696671] font-semibold'>Published By</p>
                <img src={img}   alt="" />
              </div>
            </div>
            
            <div className='flex items-center mr-10'>
              <img src={add} className='h-[50px] w-[50px]' alt="" />
              <p className='text-[#06286E] text-xl font-semibold'>Create Flashcard</p>
            </div>
       </div>

      

    </div>
  );
}
 