import React from 'react';

export default function Title() {
  return (
    <div className=' mt-[50px] flex justify-center w-screen items-center gap-20'>

          <div className='text-[#06286E] border border-[2px] border-[#06286E] border-t-0 border-l-0 border-r-0 h-[29px] w-[82px] text-center font-bold'>Study</div>

          <div className='text-[#696671] h-[29px] w-[82px] text-center font-semibold'>Quiz</div>

          <div className='text-[#696671] h-[29px] w-[82px] text-center font-semibold'>Test</div>

          <div className='text-[#696671] h-[29px] w-[82px] text-center font-semibold'>Game</div>

          <div className='text-[#696671] h-[29px] w-[82px] text-center font-semibold'>Others</div>
    </div>
  );
}
