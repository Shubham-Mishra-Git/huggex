import React from 'react';
import people from '../people.png';
import location from '../location.png';
import basket from '../basket.png';
import program from '../program.png';

export default function Cards() {
  return (
    <div className='flex flex-col items-center'>

      {/* First row of cards */}
      <div className='flex flex-wrap justify-center w-full'>
        
        <div className='flex flex-col justify-center card border rounded-md m-5 p-5 space-y-5 w-full sm:w-[calc(50%-20px)] lg:w-[500px] h-60 border-[#939CA3]'>
          <div className='flex space-x-5 text-black text-xl font-bold'>
            <img src={people} alt="People Icon" className='h-7 w-7'/>
            <p>People</p>
          </div>
          <div>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
          </div>
          <div>
            <button className='border-2 rounded-lg border-[#8064A2] px-5 py-1 text-[#8064A2]'>Connect</button>
          </div>
        </div>
        
        <div className='flex flex-col justify-center card border rounded-md m-5 p-5 space-y-5 w-full sm:w-[calc(50%-20px)] lg:w-[500px] h-60 border-[#939CA3]'>
          <div className='flex space-x-5 text-black text-xl font-bold'>
            <img src={location} alt="Location Icon" className='h-7 w-7'/>
            <p>Place</p>
          </div>
          <div>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
          </div>
          <div>
            <button className='border-2 rounded-lg border-[#8064A2] px-5 py-1 text-[#8064A2]'>Meet up</button>
          </div>
        </div>

      </div>

      {/* Second row of cards */}
      <div className='flex flex-wrap justify-center w-full'>
        
        <div className='flex flex-col justify-center card border rounded-md m-5 p-5 space-y-5 w-full sm:w-[calc(50%-20px)] lg:w-[500px] h-60 border-[#939CA3]'>
          <div className='flex space-x-5 text-black text-xl font-bold'>
            <img src={basket} alt="Basket Icon" className='h-7 w-7'/>
            <p>Product</p>
          </div>
          <div>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
          </div>
          <div>
            <button className='border-2 rounded-lg border-[#8064A2] px-5 py-1 text-[#8064A2]'>Get It</button>
          </div>
        </div>
        
        <div className='flex flex-col justify-center card border rounded-md m-5 p-5 space-y-5 w-full sm:w-[calc(50%-20px)] lg:w-[500px] h-60 border-[#939CA3]'>
          <div className='flex space-x-5 text-black text-xl font-bold'>
            <img src={program} alt="Program Icon" className='h-7 w-7'/>
            <p>Program</p>
          </div>
          <div>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
          </div>
          <div>
            <button className='border-2 rounded-lg border-[#8064A2] px-5 py-1 text-[#8064A2]'>Attend</button>
          </div>
        </div>

      </div>

    </div>
  );
}
