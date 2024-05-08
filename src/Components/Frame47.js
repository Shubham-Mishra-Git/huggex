import React from 'react';
import home from './Vector.png'
import arrow from './VectorA.png'

export default function Frame47() {
  return (
    <div className='mt-[60px] ml-[102px]'>
        <div className='flex h-[30px] w-[487px] text-[#696671] items-center space-x-2'> 
            <img className="h-[24px] w-[24px]" src={home} alt="" />
            <img  src={arrow} alt="" />
            <p>Flashcard</p>
            <img src={arrow} alt="" />
            <p>Mathematics</p>
            <img src={arrow} alt="" />
            <p className='text-[#06286E]'>Relation and Function</p>
     </div>

          <div className=' mt-[60px] ml-[20px]'>
            <p className='text-[#06286E] font-bold text-3xl'>Relation and Function (Mathematics)</p>
          </div>
    </div>
  );
}
